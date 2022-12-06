import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContacto } from './models/contact.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ngRouting';
  token: string | null = null;
  contactoSeleccionado: IContacto | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }


  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
