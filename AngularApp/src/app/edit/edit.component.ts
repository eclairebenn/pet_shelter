import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  petToEdit: any;
  message= [];

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
      console.log("got one pet data back", data);
      this.petToEdit = data['pet'];
    })
  }

  updatePet(){
    let observable = this._httpService.editPet(this.petToEdit);
    observable.subscribe(data => {
      console.log("got edit pet data back", data);
      if(data['error']){
        if(data['error'].code === 11000){
          this.message = ["That pet name already exists"]
        }
        else{
          this.message = [];
          for(let item in data['error'].errors){
            this.message.push(data['error'].errors[item].message);
          }           
        }
        console.log(data['error'])
        this.getOnePet();
      }
      else{
        this._router.navigateByUrl('/pets/' + this.id);
      }
      
    })
  }  

}
