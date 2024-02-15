import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';

bootstrapApplication(HomeComponent, appConfig) //uygulamamızın ana component'idir. yani uygulama ilk yüklendiğinde çalışan component
  .catch((err) => console.error(err));
