import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio listo para utilizar');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD8mM9JaCWdaFF0AAbwXsZE4Ym0RHUKJrsyBlBkxsddaQZdbHhWsM-2gyr_xcTf8hbAQVl1z5nGfjnnLDI'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', { headers: headers });

  }

}