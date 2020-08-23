import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component3Component } from './feature45-component3.component';

describe('Feature45Component3Component', () => {
  let component: Feature45Component3Component;
  let fixture: ComponentFixture<Feature45Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
