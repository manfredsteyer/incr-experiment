import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component18Component } from './feature15-component18.component';

describe('Feature15Component18Component', () => {
  let component: Feature15Component18Component;
  let fixture: ComponentFixture<Feature15Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
