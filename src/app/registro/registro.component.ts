import { Component, OnInit } from '@angular/core';
import { Cliente, Producto, Servicio } from '../model/app.servicio';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ServicioService]
})
export class RegistroComponent implements OnInit {
  servicios: Servicio[] = [];
  servicio: Servicio;
  serviciotmp: Servicio;
  cliente: Cliente;
  errorMessage: string;

  constructor(private service: ServicioService) { }

  ngOnInit() {
    this.servicio = new Servicio();
    this.serviciotmp = new Servicio();
    this.servicio.indSave = null;
    this.getServicios();
  }

  public getServicios() {
    this.service.getServicios().subscribe(
      servicios => {
        console.log(JSON.stringify(servicios));
        this.servicios = servicios;
        this.serviciotmp = servicios[0];
      },
      error => { this.errorMessage = <any>error; }
    );
  }
}
