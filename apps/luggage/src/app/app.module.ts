import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LuggageFeatureCheckinModule } from '@flights/luggage/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { LuggageFeatureReportLossModule } from '@flights/luggage/feature-report-loss';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    LuggageFeatureCheckinModule, 
    HttpClientModule, 
    LuggageFeatureReportLossModule,
    RouterModule.forRoot([
      { 
        path: 'feature0', 
        loadChildren: () => import('@flights/luggage/feature-f0').then(m => m.LuggageFeatureF0Module) 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
