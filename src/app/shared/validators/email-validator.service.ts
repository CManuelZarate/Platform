import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl):Observable <ValidationErrors | null >{
    const email = control.value;
    console.log({email});
    

    return of(null).pipe(
      delay(5000)
    )

    /* return of({
      emailTaken : true
    }).pipe(
      delay(5000)
    ) */

  }


}