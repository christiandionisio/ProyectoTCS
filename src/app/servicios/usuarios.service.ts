import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private  PHP_API_SERVER = "http://localhost/apiPrueba/v1/usuarios";

  constructor(private http:HttpClient) {
  }

  getusuarios(){
    return this.http.get(this.PHP_API_SERVER);
  }

  buscarUsuario(correo:string, pass:string){
    return this.http.get(this.PHP_API_SERVER + "/1/" + correo + "/" + pass);
  }
}
