import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [HomeComponent,FormsModule],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.scss'
})
export class StandaloneComponent {
    data:any;
}
