import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getPets(){
    return this._http.get('/pet');
  }
  getOnePet(id){
    return this._http.get('/pet/' + id);
  }
  addPet(newPet){
    return this._http.post('/pet', newPet);
  }
  editPet(editPet){
    return this._http.put('/pet/' + editPet._id, editPet);
  }
  deletePet(deletePet){
    return this._http.delete('/remove/' + deletePet._id);
  }
}
