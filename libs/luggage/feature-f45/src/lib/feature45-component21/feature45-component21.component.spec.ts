import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component21Component } from './feature45-component21.component';

describe('Feature45Component21Component', () => {
  let component: Feature45Component21Component;
  let fixture: ComponentFixture<Feature45Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
