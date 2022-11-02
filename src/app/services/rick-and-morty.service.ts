import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from '../models/interface/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
 

  constructor(private _Http: HttpClient) { 

  }

  
 getCharacters(name = ""){
  
  return this._Http.get(`${environment.apiUrl}character/?name=${name}`)
 }

 getSingleSharacter(id = 2){
  console.log(" tiene que entrar")
  return this._Http.get<Character>(`${environment.apiUrl}character/${id}`)

 }
  
}
