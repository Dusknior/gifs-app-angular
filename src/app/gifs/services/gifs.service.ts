import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '05L2MLgaX4BeYynR4NpzNoft7nj29Hks';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs = (query: string) => {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    console.log(this._historial);
  }
}
