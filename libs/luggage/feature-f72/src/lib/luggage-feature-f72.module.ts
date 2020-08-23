import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F72Component } from './f72.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F72Component],
  exports: [F72Component],
})
export class LuggageFeatureF72Module {}
