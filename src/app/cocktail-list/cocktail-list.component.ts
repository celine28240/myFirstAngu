import { Component, OnInit } from '@angular/core';
import { CocktailService} from '../cocktail.service';
import { Cocktail} from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails : Cocktail[]=[];
  private service : CocktailService;
  
  constructor(param_service:CocktailService) { this.service=param_service;}

  ngOnInit(): void {
    this.service.getCocktails().subscribe(
      (param_data:Cocktail[]) =>{
        this.cocktails=param_data;
      }
    );
  }

}
