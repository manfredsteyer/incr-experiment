import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component29Component } from './feature45-component29.component';

describe('Feature45Component29Component', () => {
  let component: Feature45Component29Component;
  let fixture: ComponentFixture<Feature45Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature45Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
