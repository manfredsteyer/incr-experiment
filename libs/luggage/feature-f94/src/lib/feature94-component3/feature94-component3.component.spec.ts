import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature94Component3Component } from './feature94-component3.component';

describe('Feature94Component3Component', () => {
  let component: Feature94Component3Component;
  let fixture: ComponentFixture<Feature94Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature94Component3Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature94Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
