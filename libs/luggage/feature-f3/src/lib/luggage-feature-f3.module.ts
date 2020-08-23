import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F3Component } from './f3.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F3Component],
  exports: [F3Component],
})
export class LuggageFeatureF3Module {}
