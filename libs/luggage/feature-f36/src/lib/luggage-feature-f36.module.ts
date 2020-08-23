import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F36Component } from './f36.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F36Component],
  exports: [F36Component],
})
export class LuggageFeatureF36Module {}
