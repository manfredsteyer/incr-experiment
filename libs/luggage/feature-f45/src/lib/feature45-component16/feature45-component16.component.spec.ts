import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component16Component } from './feature45-component16.component';

describe('Feature45Component16Component', () => {
  let component: Feature45Component16Component;
  let fixture: ComponentFixture<Feature45Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
