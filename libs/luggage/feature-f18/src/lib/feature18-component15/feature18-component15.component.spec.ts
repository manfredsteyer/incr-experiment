import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component15Component } from './feature18-component15.component';

describe('Feature18Component15Component', () => {
  let component: Feature18Component15Component;
  let fixture: ComponentFixture<Feature18Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature18Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
