import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading: boolean;
  nuevasCanciones: any[] = [];

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe( data => {
      this.nuevasCanciones = data;
      this.loading = false;
      console.log(this.nuevasCanciones);
    });
   }

  ngOnInit() {
  }

}
