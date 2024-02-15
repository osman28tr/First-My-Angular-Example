import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  template:`<p>child component 2!</p>`
})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
    this.dataEvent.emit({message:'Merhaba child to parent data'});
  }
  @Output() dataEvent:EventEmitter<any> = new EventEmitter();
}
