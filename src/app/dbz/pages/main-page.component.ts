import { Component } from '@angular/core';

import { Character } from '../interfaces/character.interface';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class DbzComponent {

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

}
