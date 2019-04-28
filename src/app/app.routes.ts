import {Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';




const ROUTES : Routes = [
    {path : 'sign-up', component : SignUpComponent},
    {path : 'user-profile', component : UserProfileComponent},
    {path : 'search_movie', component : SearchMovieComponent},
    {path : '',component : UserProfileComponent},
    {path : 'cocktail', component : CocktailListComponent},
];


export {ROUTES};