import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ej1Component } from './ej1/ej1.component';
import { Ej2Component } from './ej2/ej2.component';
import { LoginComponent } from './ej2/login/login.component';
import { ErrorComponent } from './ej2/error/error.component';

const routes: Routes = [
  { path: 'ej1', component: Ej1Component },
  { path: 'ej2', component: Ej2Component },
  { path: 'ej2/login', component: LoginComponent },
  { path: 'ej2/error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
