import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomUser';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  token: string | null = null;
  contactoSeleccionado: IRandomContact | undefined;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    //comprobamos si existe el token en el sesionStorage
    this.token = sessionStorage.getItem('token');
    //leemos el historial de navegación
    if(history.state.data){
      this.contactoSeleccionado = history.state.data
    }
  }

  goToContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }
    this.router.navigate(['dashboard/contacts'], navigationExtras)
  }
}
