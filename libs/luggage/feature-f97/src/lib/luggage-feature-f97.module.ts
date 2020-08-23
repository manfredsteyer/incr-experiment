import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F97Component } from './f97.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F97Component],
  exports: [F97Component],
})
export class LuggageFeatureF97Module {}
