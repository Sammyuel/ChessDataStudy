import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { gameItem } from './game';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// const endpoint = '/static/ang/assets/json/videos.json' // http://www.yourdomain.com/api/videos/
const endpoint = '/api/games/'

@Injectable()
export class gameService {
  constructor(private http: Http) { }

  list(){
      return this.http.get(endpoint)
              .map(response=>response.json())
              .catch(this.handleError)
  }

  get(embed){
    return this.http.get(endpoint + embed + "/")
              .map(response=>response.json())
              .catch(this.handleError)
  }



  search(query){
    let queryString = `?q=${query}`
    return this.http.get(endpoint + queryString)
              .map(response=>response.json())
              .catch(this.handleError)
  }

  private handleError(error:any, caught:any): any{
      console.log(error, caught)
  }

}