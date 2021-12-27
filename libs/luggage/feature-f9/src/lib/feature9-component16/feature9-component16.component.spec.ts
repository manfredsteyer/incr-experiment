import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component16Component } from './feature9-component16.component';

describe('Feature9Component16Component', () => {
  let component: Feature9Component16Component;
  let fixture: ComponentFixture<Feature9Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
