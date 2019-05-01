import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { ListFilmsComponent } from './list-films/list-films.component';
import { HightLightDirective } from './hight-light.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService} from './cocktail.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    
    ListFilmsComponent,
    
    HightLightDirective,
    
    ShowMoviesDirective,
    
    MenuComponent,
    
    SearchMovieComponent,
    
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
