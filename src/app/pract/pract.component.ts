import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pract',
  templateUrl: './pract.component.html',
  styleUrls: ['./pract.component.css']
})
export class PractComponent implements OnInit {
numbers = [ 1,2,3,4];
onlyOdd =false;
oddNumber = [1,3,5];
evenNumber = [2,4];
value = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
