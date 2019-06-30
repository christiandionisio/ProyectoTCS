import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  generarComprobante(){
    this.router.navigate(['/comprobante']);
  }

}
