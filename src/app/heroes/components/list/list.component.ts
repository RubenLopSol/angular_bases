import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public title: string = "Componente List: ngFor, ngIf, ng-template"

  public heroes: string[]= ['Spiderman', 'Ironman', 'Batman', 'Thor']
  public deletedHero: string= "";

  deleteLastHero():void{
    this.deletedHero = this.heroes.pop() || '';
  }



}
