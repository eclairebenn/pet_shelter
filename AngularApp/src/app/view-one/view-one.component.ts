import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent implements OnInit {

  id: any;
  petSelected: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
      this.getOnePet();
    });
  }

  getOnePet(){
    let observable = this._httpService.getOnePet(this.id);
    observable.subscribe(data => {
      console.log("got ONE pet data back", data);
      this.petSelected = data['pet'];
      console.log("the pet selected is", this.petSelected)
    })
  }

  updatePet(){
    this.petSelected.like += 1;
    let observable = this._httpService.editPet(this.petSelected);
    observable.subscribe(data => {
      console.log("got edit pet data back", data);
      this.getOnePet();
    })
  }

  deletePet(){
    let observable = this._httpService.deletePet(this.petSelected);
    observable.subscribe(data => {
      console.log("got delete data back", data)
    })
    this._router.navigateByUrl('/');
  }
  

}