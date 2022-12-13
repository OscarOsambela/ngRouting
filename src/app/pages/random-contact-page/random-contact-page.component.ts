import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.css'],
})
export class RandomContactPageComponent implements OnInit {
  contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService.getRandomContact().subscribe((response: Results) => {
      this.contact = response.results[0]; //pasar al RandomContact
    });
  }

  newRandomContact() {
    this.randomUserService.getRandomContact().subscribe(
      {
        next: (response: Results)=>{
          this.contact = response.results[0];
        },
        error: (error)=> console.error(`${error}`),
        complete: ()=> console.info('Petición de random contact terminada')
      }
    )
  }

  listContacts(n: number) {
    this.randomUserService.getRandomContacts(n).subscribe(
      {
        next: (response: Results)=>{
          // this.contact = response.results[0];
          console.log(response.results);

        },
        error: (error)=> console.error(`${error}`),
        complete: ()=> console.info('Petición de random contact terminada')
      }
    )
  }
}
