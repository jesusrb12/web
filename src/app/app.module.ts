import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { CustomModalComponent } from './dialogs/custom-modal/custom-modal.component';
import { AutenticacionGuardService } from './login/autenticacion-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalDialogModule.forRoot()
  ],
  providers: [AutenticacionGuardService],
  entryComponents: [CustomModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
