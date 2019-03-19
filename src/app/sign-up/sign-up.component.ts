import { Component, OnInit } from '@angular/core';
import { Signup} from './email';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: Signup={
    emailAdress : 'Enter Your Adress'
  };
  constructor() { }

  ngOnInit() {
  }

}
