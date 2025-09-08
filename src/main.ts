import '@fortawesome/fontawesome-free/css/all.css';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideTranslate } from './translate.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),

    provideAnimations(), // required for animations (e.g., Toastr)

    ...provideTranslate(), // add the ngx-translate providers here
  ],
}).catch((err) => console.error(err));
