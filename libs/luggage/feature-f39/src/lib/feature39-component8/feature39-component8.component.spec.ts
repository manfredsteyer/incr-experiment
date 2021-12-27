import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component8Component } from './feature39-component8.component';

describe('Feature39Component8Component', () => {
  let component: Feature39Component8Component;
  let fixture: ComponentFixture<Feature39Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
