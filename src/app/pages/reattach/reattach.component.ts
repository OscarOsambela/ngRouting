import { Component, OnInit, Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrecioBitCoinProvider{
  precio: number = 100;
  constructor() {
    //cada medio segudno se va a generar un nuevo precio del bitcoin
    setInterval(()=>{
      this.precio = Math.floor(Math.random() * 1000) + 100;
      console.log(`precio actual: ${this.precio}`);
     },500)
   }
}

@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.css'],
  //otra forma de llamar input
  inputs: ['onLine']

})
export class ReattachComponent implements OnInit {

  showOnLine: boolean = true;
  constructor(private _ref: ChangeDetectorRef, public precioBitCoinProvider: PrecioBitCoinProvider) {}

  set onLine(value: boolean){
    this.showOnLine = value
    if(value){
      //reacoplamos ts y html para ver los cambios en vivo
      this._ref.reattach()
    }else{
      //desaclopamos el ts y html para no actualizar la vista con los cambios
      this._ref.detach()
    }

  }

  ngOnInit(): void {
   
  }

}
