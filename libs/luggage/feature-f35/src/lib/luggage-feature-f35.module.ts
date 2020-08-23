import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F35Component } from './f35.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F35Component],
  exports: [F35Component],
})
export class LuggageFeatureF35Module {}
