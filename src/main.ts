import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Importing the app config
import { AppComponent } from './app/app.component';  // Importing the root component
import { LayoutComponent } from './app/components/layout/layout.component';
// import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
