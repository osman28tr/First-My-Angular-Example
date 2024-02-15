import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childa2',
  standalone: true,
  imports: [],
  template:`<p>child component a2!</p>`
})
export class Childa2Component implements OnInit{
  ngOnInit(): void {
    this.dataEvent.emit({message:'Merhaba child to child data'});
  }
  @Output() dataEvent:EventEmitter<any> = new EventEmitter();
}
