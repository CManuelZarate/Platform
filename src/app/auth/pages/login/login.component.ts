import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email:['test1@test.com',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.minLength(6)]],
  });

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    const {email,password} = this.miFormulario.value;

    this.authService.login(email,password)
        .subscribe( ok => {
          console.log(ok);//exito tkn; err sino
          if( ok=== true){
            this.router.navigateByUrl('application/alumno/dashboard');
          }else{
            //Swal.fire('Error',ok, 'error');
            Swal.fire('Error',"password no valido", 'error');
          }
        } );
  }

}
