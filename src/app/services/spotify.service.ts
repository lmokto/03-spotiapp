import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo para utilizar');
  }

  headers = new HttpHeaders({
    'Authorization': 'Bearer BQBsrbSsaTK8BAi30O8rj4pPi5_yQ7E9oL7cTXIbP66fXK0L0ixbpMIigGhv_WcUhiTTHTlN1mULVzju5Ng'
  });

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    return this.http.get(url, { headers: this.headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=5').pipe( map( data => data['albums']['items'] ));
  }

  getArtista(termino: string) {
    return this.getQuery(`search/?q=${ termino }&type=artist&limit=5`).pipe( map( data => data['artists']['items'] ));
  }

}
