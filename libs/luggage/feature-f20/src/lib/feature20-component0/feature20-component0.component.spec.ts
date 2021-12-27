import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component0Component } from './feature20-component0.component';

describe('Feature20Component0Component', () => {
  let component: Feature20Component0Component;
  let fixture: ComponentFixture<Feature20Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature20Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
