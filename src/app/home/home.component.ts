import { CurrencyPipe, DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from '../pipes/custom.pipe';
import { ChildComponent } from '../components/parent_to_child_communication/child/child.component';
import { ChildComponent as ChildComponent2 } from '../components/child_to_parent_communication/child/child.component';
import { ParentComponent } from '../components/parent_to_child_communication/parent/parent.component';
import { ParentComponent as ParentComponent2 } from '../components/child_to_parent_communication/parent/parent.component';
import { Parent2Component } from '../components/child_to_child_communication/parent2/parent2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,UpperCasePipe,SlicePipe,DatePipe,CurrencyPipe,CustomPipe,ChildComponent,ParentComponent,ChildComponent2,ParentComponent2,Parent2Component],
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
  <app-parent3></app-parent3> <br>`,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data:any;
  name:string;
  date:Date;
  price:number;
  @Input() pageName:string;
}
