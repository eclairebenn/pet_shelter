import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  pets = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("got get all pet data back", data);
      this.pets = data['pets'];
    })
  }
}
