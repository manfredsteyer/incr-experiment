import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component20Component } from './feature77-component20.component';

describe('Feature77Component20Component', () => {
  let component: Feature77Component20Component;
  let fixture: ComponentFixture<Feature77Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
