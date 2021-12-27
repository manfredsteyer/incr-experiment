import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component0Component } from './feature38-component0.component';

describe('Feature38Component0Component', () => {
  let component: Feature38Component0Component;
  let fixture: ComponentFixture<Feature38Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature38Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
