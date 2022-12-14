import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'ngRouting';
  token: string | null = null;

  constructor() {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }



}
