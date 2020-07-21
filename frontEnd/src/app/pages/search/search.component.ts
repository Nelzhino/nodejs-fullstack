import { Component, OnInit } from '@angular/core';
import { Technology } from '../../models/technology.model';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  technologies: Technology[] = [];
  query: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.query = params['query'];
      this._httpService
        .searchTecnology(this.query)
        .subscribe((technologies: Technology[]) =>{
          this.technologies = technologies['data'];
        });
    });
  }

}
