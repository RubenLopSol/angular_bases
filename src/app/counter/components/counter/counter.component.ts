import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public title: string = 'Componente Counter:'
  public counter: number = 10;

  constructor() {};

  increaseBy(value:number):void{
    this.counter += value
  };

  resetCounter():void{
    this.counter = 10;
  }
}

