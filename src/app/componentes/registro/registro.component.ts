import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private us:UsuariosService) { }

  ngOnInit() {
  }

  registrarUsuario(nombre:string,a_paterno:string,
                  a_materno:String,telefono:string,
                  direccion:string,correo:string,
                  pass:string,rep_pass:string){

                    this.us.insertarUsuario(nombre,a_paterno,a_materno,telefono,direccion,correo,pass).subscribe((data:any) =>{
                      console.log(data);
                    });

  }

}
