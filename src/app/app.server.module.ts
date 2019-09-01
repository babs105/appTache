import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'appTache' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
