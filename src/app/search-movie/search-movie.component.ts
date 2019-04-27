import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormArray} from '@angular/forms';

import {isRequiredValidator} from '../isRequiredValidator';
import {rangeDateValidator} from '../rangeDateValidator';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  private diagnostic = false;
  public minYear:number =1900;
  public maxYear:number = 2019;
  
  movieForm = this.fb.group({
    movieIdTitle: this.fb.group({
      id: [''],
      title:['']
    },
      {validators: isRequiredValidator("id","title")}
    ),
    type:['series'],
    date: ['', rangeDateValidator(this.minYear, this.maxYear)],
    form:['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.movieForm.valueChanges.subscribe(
      value=>{
        console.log("movieForm value has change : ", value);
      }
    ); this.formInit();
  }
  formInit(){
    this.movieForm.patchValue({
      form : "short"
    });
  }
  
  onSubmit(){
    console.log("movieForm submitted :" , this.movieForm.value);
  }

}
