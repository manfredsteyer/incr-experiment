import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component26Component } from './feature45-component26.component';

describe('Feature45Component26Component', () => {
  let component: Feature45Component26Component;
  let fixture: ComponentFixture<Feature45Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component26Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
