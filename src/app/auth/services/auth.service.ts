import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario};//desestru evitar q en algun lugar manipu
  }

  constructor(private http:HttpClient) { }

  login(email: string, password: string){
    const url =`${this.baseUrl}/auth`;
    const body = {email,password};

    return of(true);
    
    /* return this.http.post<AuthResponse>(url,body)
            .pipe(
              tap(resp => {
                if(resp.ok){//camb info _usuai no al geter
                  localStorage.setItem('token',resp.token!);//siempre viene
                }
              }),//diparo efect secundario,ejecu cod antes de los otros operadores
              map( resp => resp.ok ),//op q permite mutar la resp
              catchError(err => of(err.error.msg)) //atrapamos el err,debemos reg obs y transforma con of()
            ); */
  }
}
