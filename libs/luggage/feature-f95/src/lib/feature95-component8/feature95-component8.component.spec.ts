import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component8Component } from './feature95-component8.component';

describe('Feature95Component8Component', () => {
  let component: Feature95Component8Component;
  let fixture: ComponentFixture<Feature95Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
