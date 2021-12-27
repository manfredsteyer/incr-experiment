import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component18Component } from './feature24-component18.component';

describe('Feature24Component18Component', () => {
  let component: Feature24Component18Component;
  let fixture: ComponentFixture<Feature24Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
