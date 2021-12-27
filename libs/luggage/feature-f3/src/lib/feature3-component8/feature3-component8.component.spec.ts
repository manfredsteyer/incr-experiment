import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component8Component } from './feature3-component8.component';

describe('Feature3Component8Component', () => {
  let component: Feature3Component8Component;
  let fixture: ComponentFixture<Feature3Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
