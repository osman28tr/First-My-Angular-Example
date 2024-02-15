import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template:`<p>child works!</p> <br>
  {{childData}}`
})
export class ChildComponent {
  @Input() childData:any;
}
