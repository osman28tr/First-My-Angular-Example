import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { HomeComponent } from './home/home.component';
import { NgFor, NgIf } from '@angular/common';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'osman-appcomponent-selector',
  standalone: true,
  imports: [RouterOutlet,StandaloneComponent,HomeComponent,NgFor,NgIf],
  // template:`<p>app works!</p>
  // {{title}}
  //  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private custom:CustomPipe){
    console.log(custom.transform("Osman",1,3))
  }
  title = 'Hello my project is working! Osman Tonbul';
  person:{name:string,surname:string};
  names:string[] = ["Osman","Muhammed","Hamza"];
  visible:boolean = false;
}
