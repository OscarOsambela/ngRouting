import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  rol: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarRol(){
    this.rol = !this.rol;
  }

}
