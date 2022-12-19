import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.css'],
})
export class NgZoneComponent implements OnInit {
  progressNumber: number = 0;
  texto: string = '';

  constructor(private _ngZone: NgZone) {}

  ngOnInit(): void {}

  //terminar es un callbock que se ejecuta al terminar el incremento

  incrementarProgreso(terminar: () => void) {
    this.progressNumber += 1;
    console.log(`Progreso actual: ${this.progressNumber}%`);

    if (this.progressNumber < 100) {
      window.setTimeout(() => {
        this.incrementarProgreso(terminar);
      }, 10);
    } else {
      //yatro habría terminado de incrementarse
      //ejecutamos el callback
      terminar();
    }
  }
  //metodo que auments el progreso
  //dentro de ngZone
  //implica que los cambios ven en el html
  aumentarDentroNgZone() {
    this.texto = 'Dentro';
    this.progressNumber = 0;
    this.incrementarProgreso(() =>
      console.log(`${this.texto} de angular zone`)
    );
  }

  //metodo que auments el progreso
  //dentro de ngZone
  //implica que los cambios no se ven en el html hasta que volvamos a meter en el
  //ngZone
  aumentarFueraNgZone() {
    this.texto = 'Fuera';
    this.progressNumber = 0;
    //ejecutamos fuera del ngZone
    this._ngZone.runOutsideAngular(() => {
      this.incrementarProgreso(() => {
        //cuando termine de incrementar es cuando pasamos a eecutar en ngZone
        //volvemos a reacoplar el componente en ts y html
        this._ngZone.run(() => console.log(`${this.texto} de angular zone`));
      });
    });
  }
}
