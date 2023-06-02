import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpClientModule,HttpErrorResponse} from '@angular/common/http'
import  {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  topscorers()
  {
  let headers = new HttpHeaders().set('X-RapidAPI-Key',environment.apiKey).set('X-RapidAPI-Host','footapi7.p.rapidapi.com')
  return this.http.get('https://footapi7.p.rapidapi.com/api/tournament/7/season/36886/best-players',{headers:headers})
  }
  teams()
  {
    let headers = new HttpHeaders().set('X-RapidAPI-Key',environment.apiKey).set('X-RapidAPI-Host','footapi7.p.rapidapi.com')
    return this.http.get('https://footapi7.p.rapidapi.com/api/team/2672/players',{headers:headers})
  }
  leagues()
  {
    let headers = new HttpHeaders().set('X-RapidAPI-Key',environment.apiKey).set('X-RapidAPI-Host','footapi7.p.rapidapi.com')
    return this.http.get('https://footapi7.p.rapidapi.com/api/tournament/7/seasons',{headers:headers})
  }
  fixture(){
    let headers = new HttpHeaders().set('X-RapidAPI-Key',environment.apiKey).set('X-RapidAPI-Host','football98.p.rapidapi.com')
    return this.http.get('https://football98.p.rapidapi.com/premierleague/fixtures',{headers:headers})
  }
}
