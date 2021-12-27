import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component15Component } from './feature39-component15.component';

describe('Feature39Component15Component', () => {
  let component: Feature39Component15Component;
  let fixture: ComponentFixture<Feature39Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
