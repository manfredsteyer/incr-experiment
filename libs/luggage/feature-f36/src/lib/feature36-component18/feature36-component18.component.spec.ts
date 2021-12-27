import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component18Component } from './feature36-component18.component';

describe('Feature36Component18Component', () => {
  let component: Feature36Component18Component;
  let fixture: ComponentFixture<Feature36Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component18Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
