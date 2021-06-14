import { Component, 
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
AfterViewChecked,
OnDestroy,
ViewChild,
ContentChild,
ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None //NAtive or Emulated
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
 OnInit, 
 OnChanges, 
 DoCheck, 
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') heading; ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { 
    console.log('contructor called');
  }
ngOnChanges(changes: SimpleChanges){
 console.log('ngOnchanges called');
 console.log(changes);

  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log( 'Text Content: ' + this.heading.nativeElement.textContent);
    console.log('Text Content of  paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck Called');
  }
  ngAfterContentInit()
{
console.log('ngAfterContetnInit called');
console.log('Text Content of  paragraph:' + this.paragraph.nativeElement.textContent);

}
ngAfterContentChecked(){
  console.log('ngAfterContentContent called');
}
ngAfterViewInit(){
  console.log('ngAfterViewChecked called');
  console.log( 'Text Content: ' + this.heading.nativeElement.textContent);

}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called');
}
ngOnDestroy(){
  console.log('ngOnDestroy called');
}
}

