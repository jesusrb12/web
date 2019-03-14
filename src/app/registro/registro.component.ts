import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Cliente, Producto, Servicio } from '../model/app.servicio';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { CustomModalComponent } from '../dialogs/custom-modal/custom-modal.component';
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

  constructor(private service: ServicioService, private modalDialogService: ModalDialogService, private viewContainer: ViewContainerRef) { }

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

  public openCustomModal(pServicio) {
    console.log("dataEntrada", pServicio);
    this.modalDialogService.openDialog(this.viewContainer,
      {
        title: 'Información de Deuda',
        childComponent: CustomModalComponent,
        settings: {
          closeButtonClass: 'close theme-icon-close'
        },
        data: pServicio
      });
  }
}
