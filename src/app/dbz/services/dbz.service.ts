import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public character: Character[] = [{
    name: 'Son Goku',
    power: 100000
  },{
    name:'Vegeta',
    power: 99050
  },{
    name: 'Son Gohan',
    power: 98500
  }];

  onNewCharacter(character: Character):void {
    this.character.push(character);

  }

  onDeleteCharacter(index:number){
    this.character.splice(index,1);
  }

}
