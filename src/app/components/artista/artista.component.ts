import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  loadingArtist: boolean;
  topTracks: any[] = [];

  artista: any = {};
  constructor( private route: ActivatedRoute , private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.route.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe( artista => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
      console.log(this.topTracks);
    });
  }

}
