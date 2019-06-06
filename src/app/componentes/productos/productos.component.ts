import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  mostrarProducto(){
    this.router.navigate(['producto']);
  }

}
