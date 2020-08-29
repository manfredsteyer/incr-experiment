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
    },
    {
        path: 'feature1',
        loadChildren: () => import('@flights/luggage/feature-f1').then(m => m.LuggageFeatureF1Module)
    },
    {
        path: 'feature2',
        loadChildren: () => import('@flights/luggage/feature-f2').then(m => m.LuggageFeatureF2Module)
    },
    {
        path: 'feature3',
        loadChildren: () => import('@flights/luggage/feature-f3').then(m => m.LuggageFeatureF3Module)
    },
    {
        path: 'feature4',
        loadChildren: () => import('@flights/luggage/feature-f4').then(m => m.LuggageFeatureF4Module)
    },
    {
        path: 'feature5',
        loadChildren: () => import('@flights/luggage/feature-f5').then(m => m.LuggageFeatureF5Module)
    },
    {
        path: 'feature6',
        loadChildren: () => import('@flights/luggage/feature-f6').then(m => m.LuggageFeatureF6Module)
    },
    {
        path: 'feature7',
        loadChildren: () => import('@flights/luggage/feature-f7').then(m => m.LuggageFeatureF7Module)
    },
    {
        path: 'feature8',
        loadChildren: () => import('@flights/luggage/feature-f8').then(m => m.LuggageFeatureF8Module)
    },
    {
        path: 'feature9',
        loadChildren: () => import('@flights/luggage/feature-f9').then(m => m.LuggageFeatureF9Module)
    },
    {
        path: 'feature10',
        loadChildren: () => import('@flights/luggage/feature-f10').then(m => m.LuggageFeatureF10Module)
    },
    {
        path: 'feature11',
        loadChildren: () => import('@flights/luggage/feature-f11').then(m => m.LuggageFeatureF11Module)
    },
    {
        path: 'feature12',
        loadChildren: () => import('@flights/luggage/feature-f12').then(m => m.LuggageFeatureF12Module)
    },
    {
        path: 'feature13',
        loadChildren: () => import('@flights/luggage/feature-f13').then(m => m.LuggageFeatureF13Module)
    },
    {
        path: 'feature14',
        loadChildren: () => import('@flights/luggage/feature-f14').then(m => m.LuggageFeatureF14Module)
    },
    {
        path: 'feature15',
        loadChildren: () => import('@flights/luggage/feature-f15').then(m => m.LuggageFeatureF15Module)
    },
    {
        path: 'feature16',
        loadChildren: () => import('@flights/luggage/feature-f16').then(m => m.LuggageFeatureF16Module)
    },
    {
        path: 'feature17',
        loadChildren: () => import('@flights/luggage/feature-f17').then(m => m.LuggageFeatureF17Module)
    },
    {
        path: 'feature18',
        loadChildren: () => import('@flights/luggage/feature-f18').then(m => m.LuggageFeatureF18Module)
    },
    {
        path: 'feature19',
        loadChildren: () => import('@flights/luggage/feature-f19').then(m => m.LuggageFeatureF19Module)
    },
    {
        path: 'feature20',
        loadChildren: () => import('@flights/luggage/feature-f20').then(m => m.LuggageFeatureF20Module)
    },
    {
        path: 'feature21',
        loadChildren: () => import('@flights/luggage/feature-f21').then(m => m.LuggageFeatureF21Module)
    },
    {
        path: 'feature22',
        loadChildren: () => import('@flights/luggage/feature-f22').then(m => m.LuggageFeatureF22Module)
    },
    {
        path: 'feature23',
        loadChildren: () => import('@flights/luggage/feature-f23').then(m => m.LuggageFeatureF23Module)
    },
    {
        path: 'feature24',
        loadChildren: () => import('@flights/luggage/feature-f24').then(m => m.LuggageFeatureF24Module)
    },
    {
        path: 'feature25',
        loadChildren: () => import('@flights/luggage/feature-f25').then(m => m.LuggageFeatureF25Module)
    },
    {
        path: 'feature26',
        loadChildren: () => import('@flights/luggage/feature-f26').then(m => m.LuggageFeatureF26Module)
    },
    {
        path: 'feature27',
        loadChildren: () => import('@flights/luggage/feature-f27').then(m => m.LuggageFeatureF27Module)
    },
    {
        path: 'feature28',
        loadChildren: () => import('@flights/luggage/feature-f28').then(m => m.LuggageFeatureF28Module)
    },
    {
        path: 'feature29',
        loadChildren: () => import('@flights/luggage/feature-f29').then(m => m.LuggageFeatureF29Module)
    },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
