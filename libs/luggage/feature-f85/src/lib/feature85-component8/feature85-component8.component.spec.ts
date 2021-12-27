import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component8Component } from './feature85-component8.component';

describe('Feature85Component8Component', () => {
  let component: Feature85Component8Component;
  let fixture: ComponentFixture<Feature85Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
