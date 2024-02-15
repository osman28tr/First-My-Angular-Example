import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [ChildComponent],
  template:`<p>parent component 2! <br>
  <app-child2 (dataEvent)="childEvent($event)"></app-child2>`
})
export class ParentComponent {
  childEvent(obj:any){
    console.log(obj.message);
  }
}
