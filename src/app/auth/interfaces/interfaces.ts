export interface AuthResponse{
  ok:boolean; 
  uid?: string;//puede venir va ser opcio
  name?: string;
  email?:string;
  token?: string;
  msg?: string;
}

export interface Usuario{ //cambiara
  uid:string;
  name:string;
  email:string;
}