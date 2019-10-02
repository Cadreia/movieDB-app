import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imagePipe'
})
export class MovieImagePipe implements PipeTransform{
    transform(movie:any): any {
       let poster_before: string = 'https://image.tmdb.org/t/p/w500';
        if(movie.poster_path) {
            return poster_before + movie.poster_path;
        }else {
            if(movie.backdrop_path) {
                return poster_before + movie.backdrop_path;
            }else {
                return 'assets/img/noimage.png';
            }
        }

    }
}