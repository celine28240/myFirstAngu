import { Injectable } from '@angular/core';
import {Cocktail} from './cocktail';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails:Cocktail[]=[];

  
  /*public cocktailList : Cocktail[]=[
    new Cocktail ("Cocktail punch exotic", 10, "https://static.cuisineaz.com/680x357/i92044-cocktail-punch-exotique.jpg"),
    new Cocktail ("Cocktail de fruits exotics sans alcool", 8, "https://static.cuisineaz.com/680x357/i87237-cocktail-de-fruits-exotiques-mangue-et-cerises-sans-alcool.jpeg"),
    new Cocktail ("Pétillant au sirop de fruit", 8, "https://static.cuisineaz.com/680x357/i93620-petillant-au-sirop-de-fruit.jpg"),
    new Cocktail ("Cocktail au gin, curaçao bleu et citron vert", 10, "https://static.cuisineaz.com/680x357/i86103-cocktail-au-gin-curacao-bleu-et-citron-vert.jpg"),
    new Cocktail ("Cocktail de fruits rouges aux épices", 9, "https://static.cuisineaz.com/680x357/i75113-cocktail-de-fruits-rouges-aux-epices.jpg"),
    new Cocktail ("Sangria de Noël", 10, "https://static.cuisineaz.com/680x357/i101370-sangria-de-noel.jpg")
  ]*/
  
  constructor(public service:HttpClient) {   }


  public getCocktails(): Observable<Cocktail[]>{
    const url:string="assets/cocktails.json";
    const obs1: Observable<any>= this.service.get(url);
    const treatment=(param_data:any)=>{
      
      let current =null;
      for (let i=0; i<param_data.length;i++){
        current= param_data[i];

        if (current !== undefined){
          this.cocktails.push(current);
        }else{
          console.log("error");
        }
      }
      return this.cocktails;
    }
    return obs1.pipe(map(treatment));
    
  }
}

