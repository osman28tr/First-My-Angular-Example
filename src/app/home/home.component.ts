import { CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomPipe } from '../pipes/custom.pipe';
import { ChildComponent } from '../components/parent_to_child_communication/child/child.component';
import { ChildComponent as ChildComponent2 } from '../components/child_to_parent_communication/child/child.component';
import { ParentComponent } from '../components/parent_to_child_communication/parent/parent.component';
import { ParentComponent as ParentComponent2 } from '../components/child_to_parent_communication/parent/parent.component';
import { Parent2Component } from '../components/child_to_child_communication/parent2/parent2.component';
import { ExampleComponentComponent } from '../components/example-component/example-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,UpperCasePipe,SlicePipe,DatePipe,
    CurrencyPipe,CustomPipe,ChildComponent,ParentComponent
    ,ChildComponent2,ParentComponent2,Parent2Component,ExampleComponentComponent,ReactiveFormsModule],
  //templateUrl: './home.component.html',
  template:`<h4>{{pageName}}</h4>
  <input type="text" [(ngModel)]= "name"><br>
  <input type="text" [(ngModel)] = "name"><br>
  {{name}}<br>
  {{name | uppercase}} <br>
  {{name | slice:0:3}} <br>
  {{date | date:'mm/dd/yyyy'}} <br>
  {{price | currency : '$'}} <br>
  {{"Merhabalar" | custom : 1 : 4}}
  <app-parent></app-parent> <br>
  <app-parent2></app-parent2> <br>
  <app-parent3></app-parent3> <br>
  <h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a class="btn btn-primary" routerLink="/src/app/components/example-component/example-component.component.html" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/app-example-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav><br>
<app-example-component data="Merhaba, onChangesEvent'i tetiklendi.">ng-content deneme</app-example-component><br>
  <form [formGroup]="frm" (ngSubmit)="onSubmit(frm)">
    <input type="text" placeholder="name" formControlName="name"> <br>
    <input type="text" placeholder="surname" formControlName="surname"> <br>
    <input type="text" placeholder="email" formControlName="email"> <br>
    <input type="text" placeholder="phone" formControlName="phone"> <br>
    <div formGroupName="address">
      <input type="text" formControlName="country"> <br>
      <input type="text" formControlName="city"> <br>
      <input type="text" formControlName="address"> <br>
    </div>
    <button>Send</button> <br>
    <button (click)="ok()">Ok</button>
  </form>
  <button (click)="markAsTouched()">markAsTouched</button>
  <button (click)="markAllTouched()">markAllTouched</button>
  <button (click)="markAsUntouched()">markAsUntouched</button>
  <button (click)="markAsDirty()">markAsDirty</button>
  <button (click)="markAsPristine()">markAsPristine</button>
  <button (click)="disable()">disable</button>
  <button (click)="enable()">enable</button>

    form touched : {{frm.touched}} <br>
    'name' form control touched : {{frm.get('name').touched}} <br>
    <hr>
    form dirty : {{frm.dirty}} <br>
    'name' form control dirty : {{frm.get('name').dirty}} <br>
    <hr>
    form disabled : {{frm.disabled}} <br>
    'name' form control disabled : {{frm.get('name').disabled}} <br>
    <hr>
    form enabled : {{frm.enabled}} <br>
    'name' form control enabled : {{frm.get('name').enabled}} <br>
    <hr>
    form pristine : {{frm.pristine}} <br>
    'name' form control pristine : {{frm.get('name').pristine}} <br>
    <hr>
    form dirty : {{frm.dirty}} <br>
    'name' form control dirty : {{frm.get('name').dirty}} <br>
    <hr>
  Valid:{{frm.valid}} <br>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data:any;
  name:string;
  date:Date;
  price:number;
  @Input() pageName:string;
  frm:FormGroup;
  constructor(private formBuilder:FormBuilder){
    var formControls = {
      name:["",Validators.required],
      surname:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      phone:["",[Validators.required,Validators.maxLength(10)]],
      address:formBuilder.group({
        country:[""],
        city:[""],
        address:[""]
      })
    }
    this.frm = formBuilder.group(formControls); //response a form group

    this.frm.valueChanges.subscribe({
      next:data=>{
        console.log(data);
      }
    })
  }
  
  onSubmit(frm:FormGroup){
    console.log(frm.value);
  }
  ok(){
    this.frm.get("name").setValue("Hamza",{onlySelf:true});
  }
  markAsTouched(){
    this.frm.get("name").markAsTouched({onlySelf:true});
  }
  markAllTouched(){
    this.frm.markAllAsTouched();
  }
  markAsUntouched(){
    this.frm.markAsUntouched();
  }
  markAsDirty(){
    this.frm.markAsDirty();
  }
  markAsPristine(){
    this.frm.markAsPristine();
  }
  disable(){
    this.frm.disable();
  }
  enable(){
    this.frm.enable();
  }
}
