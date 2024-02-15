import { Component } from '@angular/core';
import { Childb2Component } from '../childb2/childb2.component';
import { Childa2Component } from '../childa2/childa2.component';

@Component({
  selector: 'app-parent3',
  standalone: true,
  imports: [Childb2Component,Childa2Component],
  template: `<div style = "background-color:chocolate;">
    <p>parent component 2! <br>
  <app-childa2 (dataEvent)="childEvent($event)"></app-childa2><br>
  <app-childb2 [childb2Data] = datas ></app-childb2>
  </div>`
})
export class Parent2Component {
  childEvent(obj:any) : string{
     this.datas = obj.message;
     return this.datas;
  }
  datas:any;
}
