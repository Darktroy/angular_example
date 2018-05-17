import { Component, OnInit,Input ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
        <h2>{{"hello "+name}} </h2>
<button (click)="fireEvent()">go to parent</button>
    `,
  styles: []
})
export class SecondComponent implements OnInit {

    @Input('parentData') public name ;
    @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
    
  fireEvent(){
        this.childEvent.emit('Hey code i am achild go to perant');
    }

}
