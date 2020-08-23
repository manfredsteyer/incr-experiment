import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component10Component } from './feature45-component10.component';

describe('Feature45Component10Component', () => {
  let component: Feature45Component10Component;
  let fixture: ComponentFixture<Feature45Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
