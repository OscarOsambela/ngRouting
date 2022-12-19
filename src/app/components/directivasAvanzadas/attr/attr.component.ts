import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr',
  templateUrl: './attr.component.html',
  styleUrls: ['./attr.component.css']
})
export class AttrComponent implements OnInit {

  color: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
