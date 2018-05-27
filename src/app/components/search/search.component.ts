import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas: any[] = [];
  constructor( private spotify: SpotifyService) { }
  buscar( termino: string ) {
    this.spotify.getArtista(termino).subscribe( ( response: any ) => {
      console.log(response);
      this.artistas = response;
    });
  }

}
