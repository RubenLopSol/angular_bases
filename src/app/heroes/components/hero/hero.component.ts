import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public title:string = "Componente Hero: ngIf:";

  public nombre:string = "spiderman";
  public edad:number = 25;

  // public show1: boolean =true;
  // public show2: boolean =true;

  //public capitalizado:string = this.nombre.toUpperCase();

  // *! los get se ven como si fuesen propiedades, y podemos hace
  // *! {{}} de estos mismos.
  get capitalizedName():string {
    return this.nombre.toUpperCase();
  }
  //*! asi se ve como un metodo y hay que invocalo con metodo()
  getHeroDescription():string {
    return `${this.nombre} - ${this.edad}`
  }

  changeHero():void{
    this.nombre = "ironman";
    // this.show1 = false;
    // this.changeAge();
  }
  changeAge():void{
    this.edad = 45;
    // this.show2 = false;
  }
  reset():void{
    this.edad = 25;
    this.nombre = "spiderman";
    // this.show1 = true;
    // this.show2 = true;

  }


}
