import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './sass/main.scss';

platformBrowserDynamic().bootstrapModule(AppModule);