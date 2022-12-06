import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];

  ngOnInit(): void {
    //obtenemos los query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams:', params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
      }
    });
    //obtener lista de contactos
    this.contactService
      .obternerContactos(this.filtroSexo)
      .then((lista) => (this.listaContactos = lista))
      .catch((error) =>
        console.log('Ha habido un error al obtener los contactos', error)
      )
      .finally(() => console.info('petición de contactos terminada'));
  }

  //ejemplo de paso de informacion entre componentes a traves del estado
  goToHome(contacto: IContacto) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };
    this.router.navigate(['home'], navigationExtras);
  }
}
