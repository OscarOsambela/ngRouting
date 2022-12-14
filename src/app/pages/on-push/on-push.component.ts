import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OnPushComponent implements OnInit {
  //valor que se va a incrementar  cada segundo en archivo TS y que dependiendo de la estrategia de change detection sus cambios se van a poder ver en el html
  /* a diferencia el onpush solo renderiza una vez y el resto de cambios no lo va a reflejar y d forma programatica manualmente tenemos que decirle que tenemos que renderizarlo
    Referencia.- https://blog.angular-university.io/onpush-change-detection-how-it-works/
  */

  segundos: number = 0

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.segundos ++;
      console.log(`segundos transcurridos: ${this.segundos}`);

    },1000)
  }

}
