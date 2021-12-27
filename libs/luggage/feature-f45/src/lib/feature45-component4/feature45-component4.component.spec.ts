import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component4Component } from './feature45-component4.component';

describe('Feature45Component4Component', () => {
  let component: Feature45Component4Component;
  let fixture: ComponentFixture<Feature45Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
