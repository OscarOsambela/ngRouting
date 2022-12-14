import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css'],
})
export class ContactsPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private randomUserService: RandomUserService
  ) {}

  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];
  listaRandomContacts: IRandomContact[] = [];
  loading: boolean = true;

  ngOnInit(): void {
    //obtenemos los query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams:', params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
        if (params.sexo === 'female' || params.sexo === 'male') {
          this.randomUserService.getRandomContacts(9, params.sexo).subscribe({
            next: (response: Results) => {
              response.results.forEach(
                (randomContact: IRandomContact, index: number) => {
                  this.listaRandomContacts.push(randomContact);
                }
              );
              console.log(this.listaRandomContacts);
            },
            error: (error) => console.error(`${error}`),
            complete: () => {
              console.info('Petición de random contact terminada'),
                (this.loading = false);
            },
          });
        } else {
          this.randomUserService.getRandomContacts(9).subscribe({
            next: (response: Results) => {
              response.results.forEach(
                (randomContact: IRandomContact, index: number) => {
                  this.listaRandomContacts.push(randomContact);
                }
              );
              console.log(this.listaRandomContacts);
            },
            error: (error) => console.error(`${error}`),
            complete: () => {
              console.info('Petición de random contact terminada'),
                (this.loading = false);
            },
          });
        }
      }
    });

    //obtener lista de contactos
    //se elimina porque ya no es necesario esta data falsa, lo obtenemos de getRandomContacts
    // this.contactService
    //   .obternerContactos(this.filtroSexo)
    //   .then((lista) => (this.listaContactos = lista))
    //   .catch((error) =>
    //     console.log('Ha habido un error al obtener los contactos', error)
    //   )
    //   .finally(() => console.info('petición de contactos terminada'));
    //implementacion para obtener lista de contactos
  }

  //ejemplo de paso de informacion entre componentes a traves del estado
  goToHome(contacto: IRandomContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };
    this.router.navigate(['dashboard'], navigationExtras);
  }
}
