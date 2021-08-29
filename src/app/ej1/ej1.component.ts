import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej1',
  templateUrl: './ej1.component.html',
  styleUrls: ['./ej1.component.scss'],
})
export class Ej1Component implements OnInit {
  title = 'ej1';
  e1 = 'Ingrese primer edad';
  e2 = 'Ingrese segunda edad';
  promedio = 0;
  suma = 0;

  constructor() {}

  ngOnInit(): void {}

  calcular() {
    let e1int = parseInt(this.e1);
    let e2int = parseInt(this.e2);
    if (isNaN(e1int) || isNaN(e2int)) {
      alert('error, ingrese numeros');
      return;
    }
    if (
      parseInt(this.e1) < 0 ||
      parseInt(this.e1) > 99 ||
      parseInt(this.e2) < 0 ||
      parseInt(this.e2) > 99
    ) {
      alert('error, numeros invalidos');
      return;
    }
    this.promedio = (parseInt(this.e1) + parseInt(this.e2)) / 2;
    this.suma = parseInt(this.e1) + parseInt(this.e2);
  }

  limpiar() {
    this.e1 = 'Ingrese primer edad';
    this.e2 = 'Ingrese segunda edad';
    this.promedio = 0;
    this.suma = 0;
  }
}
