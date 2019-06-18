import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../../../servicios/productos.service';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.css']
})
export class ProductosAdminComponent implements OnInit {

  private productos: any = [];
  constructor(private ps:ProductosService) {
    this.mostrarProductos();
    console.log(this.productos);
  }

  ngOnInit() {
  }

  mostrarProductos(){
    this.ps.getProductos().subscribe((data:any) =>{
      for (let i = 0; i < data.length; i++) {
          this.productos.push(data[i]);
      }
    });
  }

}
