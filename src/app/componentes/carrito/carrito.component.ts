import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public router:Router) {
  }

  ngOnInit() {
  }

  mostrarProductos(){
    this.router.navigate(['/productos']);
  }

}
