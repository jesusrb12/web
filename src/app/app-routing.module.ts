import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionGuardService } from './security/autenticacion-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'mlogin', pathMatch: 'full' },
  { path: 'mlogin', loadChildren: './login/login.module#LoginModule' },
  { path: 'mestructura', loadChildren: './estructura/estructura.module#EstructuraModule', canActivate: [AutenticacionGuardService] },
  { path: '**', redirectTo: '' } // otherwise redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
