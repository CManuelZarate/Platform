import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  registro(name:string, email:string, password:string){
    const url =`${this.baseUrl}/auth/new`;
    const body = {name,email,password};

    return this.http.post<AuthResponse>(url,body)
            .pipe(//mutacio de la data true si esbien
            tap(resp => {
              if(resp.ok){
                localStorage.setItem('token',resp.token!);//siempre viene
                /* this._usuario={
                  name: resp.name!,
                  uid:resp.uid!
                } */
              }
            }),
            map( resp => resp.ok ),
            catchError(err => of(err.error.msg))
          );
  }

  login(email: string, password: string){
    const url =`${this.baseUrl}/auth`;
    const body = {email,password};

    //return of(true);
    
    return this.http.post<AuthResponse>(url,body)
            .pipe(
              tap(resp => {
                if(resp.ok){//camb info _usuai no al geter
                  localStorage.setItem('token',resp.token!);//siempre viene
                }
              }),//diparo efect secundario,ejecu cod antes de los otros operadores
              map( resp => resp.ok ),//op q permite mutar la resp
              catchError(err => of(err.error.msg)) //atrapamos el err,debemos reg obs y transforma con of()
            );
            
  }

  validarToken(): Observable<boolean>{

    const url = `${this.baseUrl}/auth/renew`;
    //es un obj q esta esperando ang para hacer mi peti http,en set pongo los headers persnoalizados q quiera
    const headers = new HttpHeaders()
                    .set('x-token',localStorage.getItem('token') ||'');

    return this.http.get<AuthResponse>(url,{ headers })
            .pipe(
              map( resp => {//retorno asi para poder ejecutar otro cod
                console.log(resp.token);
                
                localStorage.setItem('token',resp.token!);
                this._usuario={
                  name: resp.name!,//! ya hice la verificacion q viene
                  uid:resp.uid!,
                  email:resp.email!
                }

                return resp.ok;
              } ),
              catchError( err => of(false))
            );//retorno el obs ,mandar lo headers
  }

  logout(){
    //localStorage.removeItem('token');
    localStorage.clear();
  }


}
