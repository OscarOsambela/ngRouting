import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  listaContactos: IContacto[] = [
    {
      id: 1,
      nombre: 'Martin',
      apellidos: 'San Jose',
      email: 'martin@imaginagroup.com'
    },
    {
      id: 2,
      nombre: 'Oscar',
      apellidos: 'Osambela',
      email: 'osambelacolareta@gmail.com'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
