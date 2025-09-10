import '@fortawesome/fontawesome-free/css/all.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideTranslate } from './translate.config';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes'; // adjust path if needed

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),

    provideAnimations(), // required for animations

    ...provideTranslate(), // add the ngx-translate providers here

    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // scroll to top on navigation
        anchorScrolling: 'enabled', // optional: enable anchor scrolling
      })
    ),
  ],
}).catch((err) => console.error(err));
