import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  oddNumber: number[] = [];
  evenNumber: number[] = [];

  onIntervalFired(firedNumar: number){
    if(firedNumar % 2 === 0) {
      this.evenNumber.push(firedNumar);
    }
    else{
      this.oddNumber.push(firedNumar);
    }
    console.log(firedNumar);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
