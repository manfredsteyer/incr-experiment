import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component11Component } from './feature45-component11.component';

describe('Feature45Component11Component', () => {
  let component: Feature45Component11Component;
  let fixture: ComponentFixture<Feature45Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
