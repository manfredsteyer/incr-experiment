import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component6Component } from './feature45-component6.component';

describe('Feature45Component6Component', () => {
  let component: Feature45Component6Component;
  let fixture: ComponentFixture<Feature45Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
