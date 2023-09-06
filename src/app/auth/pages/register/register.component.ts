import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
//import { validateCellphone } from 'src/app/shared/validators/validators.functions';
import * as customValidators from 'src/app/shared/validators/validators.functions';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  role:string = "alumno";
  miFormulario: FormGroup = this.fb.group({
    nombres:['',[Validators.required,Validators.minLength(3),this.noWhitespaceValidator]],
    apellidos:['',[Validators.required,Validators.minLength(3),this.noWhitespaceValidator]],
    email:['',[Validators.required,Validators.email],[ this.emailValidator ]],//primero se ejecutan validadores sincronos luego los asincronos
    cellphone:['',[ customValidators.validateCellphone,Validators.pattern(customValidators.cellphonePattern) ]],
    password:['123456',[Validators.required,Validators.minLength(6)]],
    password2:['123456',[Validators.required,Validators.minLength(6)]],
    role:[this.role,[Validators.required]],
    grade:['',[Validators.required]],
    section:['',[Validators.required]],
  },{//validadores sincronos y asimcronos a nivel del formulario (arg implicito todo el form)
    validators: [
      customValidators.isFieldOneEqualFieldTwo('password','password2')
    ]
  });

  constructor(private fb:FormBuilder,
              private emailValidator:EmailValidatorService,
              private router:Router,
              private authService: AuthService) { }


  isValidField( field: string ): boolean | null{
    return this.miFormulario.controls[field].errors
      && this.miFormulario.controls[field].touched;
  }


  getFieldError( field: string ): string | null {

    if ( !this.miFormulario.controls[field] ) return null;//si no existe null
    
    const errors = this.miFormulario.controls[field].errors || {};//hay posibilidad de null en errors por ello regreso obj vacio
    console.log(errors);
    
    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
        
        case 'email':
          return `Ingrese un email valido`;
        
        case 'whitespace':
          return 'No ingrese solo espacios en blanco';
        case 'noExistNumber':
          return 'No existe ese número de telefono';
        case 'pattern':
          return  field === "cellphone" ? 'El celular debe seguir un patron parecido a 942473236' : 'No coincide con el patrón';
          //return 'No existe ese número de telefono';
        default:return 'error';
      }
    }

    return null;
  }

  ver(){
    console.log(this.miFormulario);
  }
  register(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    //this.miFormulario.reset();
  }

  inputByRole(){
    console.log(this.miFormulario);
    if(this.miFormulario.get('role')?.value === "docente"){
      this.miFormulario.removeControl('grade');
      this.miFormulario.removeControl('section');
    }else{
      this.miFormulario.addControl( 'grade', new FormControl('',Validators.required) );
      this.miFormulario.addControl( 'section', new FormControl('',Validators.required) );
    }
  }

  //noWhitespaceValidator():boolean{
  noWhitespaceValidator(control: FormControl){
    if (control.value && control.value.trim().length === 0) {
      return { whitespace: true };
    }
    return null;
  }

}
