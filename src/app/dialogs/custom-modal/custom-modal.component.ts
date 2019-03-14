import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions } from 'ngx-modal-dialog';


@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit, IModalDialog {
  private internalActionButtons = [];
  parentInfo: string;

  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<string>>) {
    this.parentInfo = options.data;
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

}
