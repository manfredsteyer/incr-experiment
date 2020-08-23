import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component20Component } from './feature15-component20.component';

describe('Feature15Component20Component', () => {
  let component: Feature15Component20Component;
  let fixture: ComponentFixture<Feature15Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
