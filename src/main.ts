import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
