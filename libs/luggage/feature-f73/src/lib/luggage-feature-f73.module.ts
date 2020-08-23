import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F73Component } from './f73.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F73Component],
  exports: [F73Component],
})
export class LuggageFeatureF73Module {}
