import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example-component',
  standalone: true,
  imports: [],
  templateUrl: './example-component.component.html',
  styleUrl: './example-component.component.scss'
})
export class ExampleComponentComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy{
  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }
  @Input() data:string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngOnInit(): void {
    console.log('ngOnInit.');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }
}
