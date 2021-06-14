import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singupForm: Form
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

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

// onSubmit(form: NgForm){
//   console.log(form);
// }
onSubmit(){
console.log('this.singupForm');
}
}
