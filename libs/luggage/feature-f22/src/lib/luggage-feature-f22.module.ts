import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flights/luggage/domain';
import { F22Component } from './f22.component';

@NgModule({
  imports: [CommonModule, LuggageDomainModule],
  declarations: [F22Component],
  exports: [F22Component],
})
export class LuggageFeatureF22Module {}
