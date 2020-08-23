import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature38Component20Component } from './feature38-component20.component';

describe('Feature38Component20Component', () => {
  let component: Feature38Component20Component;
  let fixture: ComponentFixture<Feature38Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature38Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature38Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
