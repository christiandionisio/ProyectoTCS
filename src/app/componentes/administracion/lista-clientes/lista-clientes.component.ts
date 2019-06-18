import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../../servicios/usuarios.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  private usuarios:any = [];

  constructor(private us:UsuariosService) {

    this.mostrarUsuarios();

  }

  ngOnInit() {
  }

  mostrarUsuarios(){
    this.us.getusuarios().subscribe((data:any) =>{
      for (let i = 0; i < data.length; i++) {
          this.usuarios.push(data[i]);
      }
    });
  }

}
