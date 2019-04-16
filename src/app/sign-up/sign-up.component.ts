import { Component, OnInit } from '@angular/core';
import { Signup} from './email';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 model: Signup =new Signup ;
 
 onSubmit(){
   console.log("form submitted")
 }
 
  constructor() { }

  ngOnInit() {
  }

}
