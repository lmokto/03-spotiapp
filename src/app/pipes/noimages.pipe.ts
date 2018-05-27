import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagesPipe implements PipeTransform {

  transform(images: any[]): string {
    if ( ! images ) {
      return 'assets/img/noimge.png';
    }

    if ( images.length > 0 ) {
      return images[0].url;
     } else {
      return 'assets/img/noimge.png';
     }

  }

}
