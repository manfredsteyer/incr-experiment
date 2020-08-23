import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component11Component } from './feature77-component11.component';

describe('Feature77Component11Component', () => {
  let component: Feature77Component11Component;
  let fixture: ComponentFixture<Feature77Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature77Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
