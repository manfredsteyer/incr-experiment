import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F53Component } from './f53.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F53Component],
  exports: [F53Component],
})
export class LuggageFeatureF53Module {}
