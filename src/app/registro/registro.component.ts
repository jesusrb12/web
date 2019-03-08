import { Component, OnInit } from '@angular/core';
import { Cliente,Producto,Servicio } from '../model/app.servicio';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  servicios: Servicio[] = [];
  servicio: Servicio;
  serviciotmp: Servicio;
  cliente: Cliente;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    this.servicio = new Servicio();
    this.serviciotmp = new Servicio();
    this.servicio.indSave = null;
    //this.getServicios();
  }

}
