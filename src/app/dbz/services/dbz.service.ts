import { Injectable, importProvidersFrom } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public character: Character[] = [{
    id: uuid(),
    name: 'Son Goku',
    power: 100000
  },{
    id: uuid(),
    name:'Vegeta',
    power: 99050
  },{
    id: uuid(),
    name: 'Son Gohan',
    power: 98500
  }];

  addCharacter(character: Character):void {

    const newCharacter: Character = { id: uuid(), ...character}

    this.character.push(newCharacter);

  }

  deleteCharacterById( id:string ) {
    this.character = this.character.filter( character => character.id !== id)
  }

}
