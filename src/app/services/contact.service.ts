import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';
import { IContacto } from '../models/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  listaContactos: IContacto[] = LISTA_CONTACTOS;

  constructor() {}

  obternerContactos(sexo?: string): Promise<IContacto[]> {
    if (sexo == 'masculino' || sexo == 'femenino') {
      let listaFiltrada: IContacto[] = this.listaContactos.filter(
        (contacto) => contacto.sexo == sexo
      );
      return Promise.resolve(listaFiltrada);
    } else if (sexo == 'todos') {
      return Promise.resolve(this.listaContactos);
    } else {
      return Promise.reject('filtro no valido');
    }
  }
}