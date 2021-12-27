import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component18Component } from './feature51-component18.component';

describe('Feature51Component18Component', () => {
  let component: Feature51Component18Component;
  let fixture: ComponentFixture<Feature51Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
