import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private correo:string = "";
  private password:string = "";

  constructor(public router:Router) {
    //console.log("holaa");
  }

  iniciarSesion(){
    let usuario = {
      correo: this.correo,
      id : "49850",
      nombre: "Christian"
    }

    localStorage.setItem("usuario",JSON.stringify(usuario));
    this.router.navigate(['/home']);
  }

}
