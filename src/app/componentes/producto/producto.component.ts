import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProductosService} from '../../servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  private producto:any = [];

  constructor(private router:Router,
              private route:ActivatedRoute,
              private ps:ProductosService) {
              this.mostrarProducto(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

  mostrarProducto(id:string){
    this.ps.buscarProducto(id).subscribe((data) =>{
      this.producto = data[0];
      console.log(this.producto);
    });
  }

  regresar(){
    this.router.navigate([this.route.snapshot.paramMap.get('ret')]);
  }

  llenarCarrito(){
    let producto = {
      id: this.producto.idProductos,
      nombreProducto: this.producto.ProductoNombre,
      precio: this.producto.ProductoPrecioUnitario,
      cantidad: 1
    }
    let carrito = [];
    if (JSON.parse(localStorage.getItem("carrito")) != null) {
        carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito.push(producto);
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }else{
      carrito.push(producto);
      localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    //localStorage.removeItem("carrito");
  }


}
