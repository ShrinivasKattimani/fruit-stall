import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Fruit } from './fruit';

@Injectable()
export class FruitService {

  private _getUrl = '/api/fruits';//To fetch all the fruits
  private _postUrl = '/api/fruit';//To add a new fruit
  private _putUrl = '/api/fruit/'; //To Edita an existing fruit
  private _deleteUrl = '/api/fruit/'; //To delete a fruit
  
  constructor(private _http: Http) { }
  
  getFruits(){
    return this._http.get(this._getUrl)
    .map((response: Response)=>response.json());
  }

  addFruit(fruit: Fruit){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl,
      JSON.stringify(fruit),
      options)
      .map((response:Response) =>response.json());
  }

  updateFruit(fruit: Fruit){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + fruit._id,
      JSON.stringify(fruit),
      options)
      .map((response:Response) =>response.json());
  }

  deleteFruit(fruit: Fruit){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this._deleteUrl + fruit._id)
      .map((response:Response) =>response.json());
  }
}
