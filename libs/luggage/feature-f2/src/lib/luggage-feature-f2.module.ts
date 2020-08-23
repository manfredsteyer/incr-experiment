import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F2Component } from './f2.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F2Component],
  exports: [F2Component],
})
export class LuggageFeatureF2Module {}
