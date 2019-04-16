import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
@Input() label: string = "hidden";
@Output() onclick = new EventEmitter<string>();

  user={
    name : "Henichard",
    firstName : "Celine",
    age :42,
    quote:"",
    photo: "https://tof.cx/images/2019/03/25/c4e9a84e07abc7de30a53cc6e852b252.jpg"
  }

//rajouter fonction hiddenage
CacherAge(){
  if (this.label == "hidden"){
    this.label= "visible";
  }
  else{
    this.label="hidden";
  }
  this.onclick.emit(this.label);
}
  constructor() { }

  ngOnInit() {
  }

}
