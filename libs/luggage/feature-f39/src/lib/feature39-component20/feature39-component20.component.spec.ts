import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component20Component } from './feature39-component20.component';

describe('Feature39Component20Component', () => {
  let component: Feature39Component20Component;
  let fixture: ComponentFixture<Feature39Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
