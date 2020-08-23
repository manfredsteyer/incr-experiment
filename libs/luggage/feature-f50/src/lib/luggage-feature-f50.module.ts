import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F50Component } from './f50.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F50Component],
  exports: [F50Component],
})
export class LuggageFeatureF50Module {}
