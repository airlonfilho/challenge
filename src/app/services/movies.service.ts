import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  urlBase = environment.urlBase;
  keyApi = environment.keyApi;

  constructor(private http: HttpClient) { }

  listarFilmes(): Observable<any>{
    return this.http.get(this.urlBase + 'movie/popular?api_key=' + this.keyApi + '&language=pt-BR', {});
  }

}
