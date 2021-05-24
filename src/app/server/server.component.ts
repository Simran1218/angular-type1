import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  title = 'Angular';
  todaydate = new Date(); 
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", 
     "Sept", "Oct", "Nov", "Dec"]; 


  constructor() { }

  ngOnInit(): void {
  }

}
