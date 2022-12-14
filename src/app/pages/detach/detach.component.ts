import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Injectable,
} from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root',
})
export class DataListProvider {
  get data() {
    //devolverá lista aleatoria de nombre (mocks.js)
    const randonName = Mock.Random;
    return [randonName.first(), randonName.first(), randonName.first()];
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.css'],
})
export class DetachComponent implements OnInit {
  constructor(
    private _ref: ChangeDetectorRef,
    public dataListProvider: DataListProvider
  ) {}

  ngOnInit(): void {
    //desacolplar el componente a traves de detach, todo lo que hay en el controlador no se va a actualizar en la vista hasta que lo renganchemos con la fiuncion changedetection o que manualmente lo hagamos
    this._ref.detach();
    //cuando un componente esta desacoplado solo hay dos formas de decirle que replique los cambios en el HTML.
    //1. con el detectChanges() => detectar los cambios en ese momento y actualizar html
    //2. reattach()=> msirve para volver a acoplar el componente
    // en este ejemplo angular detectara los cambios cada 3 segudnos y los replicara en el html
    setInterval(() => {
      this._ref.detectChanges();
    }, 3000);
  }
}
