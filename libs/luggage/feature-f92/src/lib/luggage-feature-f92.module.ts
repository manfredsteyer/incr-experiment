import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F92Component } from './f92.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F92Component],
  exports: [F92Component],
})
export class LuggageFeatureF92Module {}
