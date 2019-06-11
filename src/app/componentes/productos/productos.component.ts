import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductosService} from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private productos:any = [];

  constructor(public router:Router, private ps:ProductosService) {
    this.mostrarProductos();
    //console.log(this.productos);
  }

  ngOnInit() {
  }

  mostrarProducto(id:string){
    this.router.navigate(['producto',id,'productos']);
  }

  mostrarProductos(){
    this.ps.getProductos().subscribe((data:any) =>{
      for (let i = 0; i < data.length; i++) {
          this.productos.push(data[i]);
      }
    });
  }
}
