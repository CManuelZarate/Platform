/**
 * Este archivo tiene nuestras validaciones centralizadas
 */

import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';


export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const cellphonePattern: string = "^9[0-9]{8}$";


/**
 * Valida que el numero de telefono no sea 999999999
 * @param control es el campo que se va evaluar
 * @returns 
 */
export const validateCellphone = (control : FormControl) => {
  
  if (control.value && control.value === '999999999') {
    return { noExistNumber: true };
  }
  return null;
};


export const isFieldOneEqualFieldTwo = (field1:string , field2:string) => {
  //conecto al formGroup ,la funcion retorna 

  return (formGroup: FormGroup):ValidationErrors|null => {
    const fieldValue1 = formGroup.get(field1)?.value;
    const fieldValue2 = formGroup.get(field2)?.value;

    if( fieldValue1 !== fieldValue2 ){
      //establecemos en el input el error 
      
      formGroup.get(field2)?.setErrors({ notEqual: true });
      return { notEqual: true }
    }

    //tener cuidado ya que limpiamos y quitamos cualquier otro error
    formGroup.get(field2)?.setErrors(null);
    return null;
  }
} 