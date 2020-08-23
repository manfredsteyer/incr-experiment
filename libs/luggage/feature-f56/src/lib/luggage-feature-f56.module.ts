import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F56Component } from './f56.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F56Component],
  exports: [F56Component],
})
export class LuggageFeatureF56Module {}
