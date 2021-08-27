import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'pictureImage'
})
export class PictureImagePipe implements PipeTransform {

  transform(hero: Heroe): string {
    
    console.log('pipe imagen procesado');

    if(!hero.id ){
      return "assets/no-image.png";
    }
     else if(hero.alt_img){
      return hero.alt_img;
    }else{   
    return "assets/heroes/"+hero.id+".jpg";
  }

  }

}
