import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo para utilizar');
  }

  headers = new HttpHeaders({
    'Authorization': 'Bearer BQDL0YVLtmm0pwOcueeBznbHaLOzkWzrLEx-JcdCMM5gA2XAwdgwxeODzooyJyJL1rGehID27OBNT2RJ1NY'
  });

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, { headers: this.headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=5').pipe( map( data => data['albums']['items'] ));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getArtistas(termino: string) {
    return this.getQuery(`search/?q=${ termino }&type=artist&limit=5`).pipe( map( data => data['artists']['items'] ));
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe( map( data => data['tracks'] ));
  }

}
