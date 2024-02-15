import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb2',
  standalone: true,
  imports: [],
  template:`<p>child component b2!</p>
  {{childb2Data}}`
})
export class Childb2Component {
  @Input() childb2Data:any;
}
