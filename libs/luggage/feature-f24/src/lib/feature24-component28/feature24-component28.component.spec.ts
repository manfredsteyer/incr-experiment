import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component28Component } from './feature24-component28.component';

describe('Feature24Component28Component', () => {
  let component: Feature24Component28Component;
  let fixture: ComponentFixture<Feature24Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
