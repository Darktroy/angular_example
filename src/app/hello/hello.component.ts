import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: ` <h2> 
                Welcome {{name}}
            </h2>
            <h3>{{"WElcome to the hell of js dEAR "+name}}</h3>
            <input [id]="myId" type = "text" value="testing">
            <input id="{{myId}}" type = "text" value="testing">
            <br/>

            <input [disabled]="isDisabled" type = "text" value="testing">
            <small>1 st way of binding the boolean value ti the element </small>
            <br/>
            <input bind-disabled="isDisabled" type = "text" value="testing">
            <small>2'nd way of binding the boolean value ti the element </small>
            <br/>

            <h2 class = "text-success"> class test </h2>
            <h2 [class]="successClass"> class test </h2>
            <br/>
            <h2 [class.text-danger] = "hasError"> class test </h2>
            <small>that's about how to change class of style depending on variable from the class</small>
            <br/>
            <h2 [ngClass]="messagesClasses">using array of classes get from the component class depending on some variable </h2>
            <br/>
            <h2 [style.color]="hasError ? 'red':'green'">Style Binding</h2>
            <h2 [style.color]="highLight">Style Binding 2 </h2>
            <h2 [ngStyle]="titleStyle">Style Binding 3</h2>
            <button (click)="onClick($event)">Greetings</button>
            <button (click)="greeting='welcome two'">Greetings 2</button>

            {{greeting}}
<br/>
        <input #myInput type="text">
        <button (click)="logMessage(myInput.value)" >log </button>
<br/>
        <h2>Two way Binding</h2>
        <input [(ngModel)]="bindingName" type = "text">
        {{bindingName}}
<br/>
        <h2 *ngIf="displayName">
        Codeevalution
        </h2>





<br/>
        <h2 *ngIf="displayName; else elseBlock">
            codeEvalution
        </h2>
        <ng-template #elseBlock>
        <h2>Hidden name</h2>
        </ng-template>
<br/>
        <div *ngIf="displayName; then thenBlock; else elseBlock2"> </div>
            codeEvalution
        
        <ng-template #thenBlock>
        <h2>Hidden but not the name</h2>
        </ng-template>

        <ng-template #elseBlock2>
        <h2>Hidden name</h2>
        </ng-template>

<br/>
        <div *ngFor = "let color of colors; index as i">
            <h3>{{i}} {{color}}</h3>
        </div>
        <div *ngFor = "let color of colors; first as f">
            <h3>{{f}} {{color}}</h3>
        </div>
        <div *ngFor = "let color of colors; last as l">
            <h3>{{l}} {{color}}</h3>
        </div>
        <div *ngFor = "let color of colors; odd as o">
            <h3>{{o}} {{color}}</h3>
        </div>
 
`,





  styles: [`
        .text-success { color: green; }    
        .text-danger { color: red; }    
        .text-special { font-style: italic; }    
        `]
})





export class HelloComponent implements OnInit {

    public name = "VishHello";
    public bindingName = '';
    public myId = "myid";
    public isDisabled = false;
    public successClase = "text-success"
    public hasError = false;
    public isSpecial = true;
    public highLight = "orange";
    public titleStyle = {
        color:"green",
        fontStyle: "italic"
    
    };
    public greeting ="";

    public messagesClasses = {
            "text-success": !this.hasError,
            "text-danger": !this.hasError,
            "text-special": !this.isSpecial,
        }

    public displayName = true;



    public colors = ['red','yellow','black','green'];

    constructor() { }
    onClick(event){
        console.log(event);
        this.greeting=event.type;
        }
    logMessage(value){
        this.greeting = value;
    }
    ngOnInit() {

    }

}
