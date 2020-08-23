import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F37Component } from './f37.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F37Component],
  exports: [F37Component],
})
export class LuggageFeatureF37Module {}
