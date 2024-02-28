import { Routes } from '@angular/router';
import { ExampleComponentComponent } from './components/example-component/example-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{path:'app-home',component:HomeComponent},
{path:'app-example-component',component:ExampleComponentComponent}];
