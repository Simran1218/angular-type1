import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  serverElements = [{type: 'server', name: 'Testserver', content: 'just a  test'}];

  

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirsT(){
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
