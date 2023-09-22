import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] =[{
    // Valor por defecto en caso de no ullegar nada.
    name: 'Trunks',
    power: 80000
  }]


  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCaracter(id?:string):void {

    if (!id) return;
    
    this.onDelete.emit(id);

  }





}
