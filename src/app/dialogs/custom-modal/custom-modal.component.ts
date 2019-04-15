import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';
import { Servicio } from 'src/app/model/app.servicio';


@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit, IModalDialog {
  private internalActionButtons = [];
  parentInfo: Servicio;

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<Servicio>>) {
    this.parentInfo = options.data; //new Servicio();
    // var bnd = options.data;
    // this.parentInfo.cliente.codigo = bnd.cliente.codigo;
    options.actionButtons = this.internalActionButtons;
    this.internalActionButtons.push({
      text: 'Close',
      buttonClass: 'btn btn-success',
      onAction: () => true
    })
  }

  constructor() { }

  ngOnInit() {
  }

  parseToObject(objString: string) {

  }
}
