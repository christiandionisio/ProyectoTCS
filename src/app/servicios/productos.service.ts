import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private  PHP_API_SERVER = "http://68.183.68.210/apiProyecto/v1/productos";

  constructor(private http:HttpClient) {
  }

  getProductos(){
    return this.http.get(this.PHP_API_SERVER);
  }

  buscarProducto(id:string){
    return this.http.get(this.PHP_API_SERVER + "/" + id);
  }
}
