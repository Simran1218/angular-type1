import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular Basics' ;
  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];

// isavailable = true;
// myClickFunction(event) { 
// on click of the button.
// alert("Button is clicked");
// console.log(event);

isavailable = true;
myClickFunction(event) {
   alert("Button clicked");
   console.log(event);



}
changemonths(event) {
alert("Change month  Dropdown");
}
}
