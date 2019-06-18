import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuariosService} from '../../../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private correo:string = "";
  private password:string = "";
  private usuario:any = [];

  constructor(public router:Router,
              private us:UsuariosService) {
  }

  ngOnInit(){

  }

  iniciarSesion(correo:string, pass:string){
    this.us.buscarUsuario(correo,pass).subscribe((data) =>{
      this.usuario = data[0];
      console.log(this.usuario);

      let usuario = {
        correo: this.usuario.emailUsuario,
        id : this.usuario.idUsuario,
        nombre: this.usuario.nombreUsusario,
        a_paterno: this.usuario.apellidoPaternoUsuario,
        a_materno: this.usuario.apellidoMaternoUsuario
      }

      localStorage.setItem("usuario",JSON.stringify(usuario));
      this.router.navigate(['/home']);
    });
  }

}
