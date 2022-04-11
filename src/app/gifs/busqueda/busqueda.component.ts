import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  buscar = () => {
    const valor = this.searchInput.nativeElement.value;


    if (valor.trim().length === 0) {
      return
    }

    this.gifsService.buscarGifs(valor);

    this.searchInput.nativeElement.value = '';
  }


}