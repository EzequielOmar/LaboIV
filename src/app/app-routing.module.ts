import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ej1Component } from './ej1/ej1.component';

const routes: Routes = [{ path: 'ej1', component: Ej1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
