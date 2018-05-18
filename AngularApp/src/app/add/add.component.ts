import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  petToAdd = {"name": "", "petType": "", "description": "", "skills": []};
  message = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  addPet(){
    let observable = this._httpService.addPet(this.petToAdd);
    observable.subscribe(data => {
      console.log("got the add data back", data);
      this.petToAdd = {"name": "", "petType": "", "description": "", "skills": []};
    
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
       
      }
      else{
        this._router.navigateByUrl('/');
      }
    })
  }

}
