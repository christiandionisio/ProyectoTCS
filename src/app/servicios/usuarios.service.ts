import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private  PHP_API_SERVER = "http://localhost/apiPrueba/v1/usuarios";
  private headers:any;

  constructor(private http:HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getusuarios(){
    return this.http.get(this.PHP_API_SERVER);
  }

  buscarUsuario(correo:string, pass:string){
    return this.http.get(this.PHP_API_SERVER + "/1/" + correo + "/" + pass);
  }

  insertarUsuario(nombre:string,a_paterno:string,
                  a_materno:String,telefono:string,
                  direccion:string,correo:string,
                  pass:string){

                    let usuario = {
                      nombre: nombre,
                      a_paterno: a_paterno,
                      a_materno: a_materno,
                      telefono: telefono,
                      direccion: direccion,
                      email: correo,
                      password: pass
                    }

                    return this.http.post(this.PHP_API_SERVER,usuario,
                              {
                                headers: {
                                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                                }
                              });
  }
}
