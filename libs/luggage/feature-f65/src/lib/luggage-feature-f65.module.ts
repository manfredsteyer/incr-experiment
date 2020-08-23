import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F65Component } from './f65.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F65Component],
  exports: [F65Component],
})
export class LuggageFeatureF65Module {}
