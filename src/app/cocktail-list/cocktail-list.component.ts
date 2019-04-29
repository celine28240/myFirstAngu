import { Component, OnInit } from '@angular/core';
import { CocktailService} from '../cocktail.service';
import { Cocktail} from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails : Cocktail[];
  
  constructor(private service:CocktailService) { this.cocktails=[];}

  ngOnInit() {
    this.cocktails=this.service.getCocktails();
  }

}
