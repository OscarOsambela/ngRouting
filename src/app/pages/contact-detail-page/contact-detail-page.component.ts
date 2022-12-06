import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;
  contacto: IContacto = {
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    sexo: 'femenino',
  };
  filtroPrevio: string = 'todos';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //leer parametros
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });

    //leer del state un contacto
    if (history.state.data) {
      this.contacto = history.state.data;
    }
    if (history.state.filtro) {
      this.filtroPrevio = history.state.filtro;
    }
  }
}
