import { element } from 'protractor';
import { Movie } from './models/movie';
import { MoviesService } from './services/movies.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge';

  urlImages = environment.urlImgBase;

  movies: any[];

  constructor(private service: MoviesService){}

  ngOnInit(): void {
    this.service.listarFilmes().subscribe(
      (response: any) => {
        this.movies = response.results;
      })
  }
}
