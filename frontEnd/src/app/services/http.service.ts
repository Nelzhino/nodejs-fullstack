import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Technology } from '../models/technology.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_URI_API;

  constructor(private readonly _http: HttpClient, ) { }

  public getTechnologies(){
    return this._http.get<Technology[]>(this.baseUrl + '/technologies')
  }

  public getTechnology(id: string){
    return this._http.get<Technology>(this.baseUrl + '/technology/' + id);
  }

  public searchTecnology(query:string) {
    return this._http.get<Technology[]>(this.baseUrl + '/technology/search/' + query);
  }
}
