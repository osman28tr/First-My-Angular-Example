import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template:`<p>parent works!</p>
  <app-child [childData]="data"></app-child>`
})
export class ParentComponent {
  data:any = "Merhaba ben parent component"
}
