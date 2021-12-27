import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component18Component } from './feature18-component18.component';

describe('Feature18Component18Component', () => {
  let component: Feature18Component18Component;
  let fixture: ComponentFixture<Feature18Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
