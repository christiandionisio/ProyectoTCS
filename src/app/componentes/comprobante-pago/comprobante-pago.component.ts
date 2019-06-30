import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-comprobante-pago',
  templateUrl: './comprobante-pago.component.html',
  styleUrls: ['./comprobante-pago.component.css']
})
export class ComprobantePagoComponent {

  @ViewChild('content') content: ElementRef;

  constructor() {
  }

  public descargarPDF(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      "#editor": function(element, renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;

     doc.fromHTML(content.innerHTML,10,10,{
       'width': 190,
       'elementHandlers': specialElementHandlers
     });

     doc.save('comprobante.pdf');
  }

}
