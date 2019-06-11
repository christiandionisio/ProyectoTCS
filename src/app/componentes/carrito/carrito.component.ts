import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  private productos:any[];

  constructor(public router:Router) {
    this.productos = JSON.parse(localStorage.getItem("carrito"));
    //console.log(this.productos);
  }

  ngOnInit() {
  }

  mostrarProductos(){
    this.router.navigate(['/productos']);
  }

  eliminarProducto(index:any){
    if (index > -1) {
        this.productos.splice(index,1);
    }

    localStorage.setItem('carrito',JSON.stringify(this.productos));
  }

}
