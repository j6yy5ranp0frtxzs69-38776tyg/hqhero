/**
 * MIT License
 *
 * Copyright (c) Oliver Bell  <freshollie@gmail.com> 
 *             & Eddie Reeder <edlilkid@hotmail.co.uk>
 *
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare let gtag: Function;

if (environment.production) {
  // Please remove if not deploying to hqhero.com
  gtag('js', new Date());
  gtag('config', 'UA-121404315-1');
  
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    //navigator.serviceWorker.register('./ngsw-worker.js');
  }
}).catch(err => console.log(err));
