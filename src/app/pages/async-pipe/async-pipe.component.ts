import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  title = 'ngChangeDetection';

  //variablepara el ejemplo de rettach
  live: boolean = true;

  //valores para el ejemplo de async pipe
items = [{}];
items$ = new BehaviorSubject(this.items); //le pasamos un valor por defecto
 
addItem(){
  const nuevoItem = Math.floor(Math.random() * 100) +1;
  this.items.push(
    {
      numero: nuevoItem
    }
  )
  //emitimos un nuevo valor de la lista de items
  //al componente suscrito
  this.items$.next(this.items);
}
constructor() { }

  ngOnInit(): void {
  }

}
