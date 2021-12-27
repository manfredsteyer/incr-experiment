import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component16Component } from './feature52-component16.component';

describe('Feature52Component16Component', () => {
  let component: Feature52Component16Component;
  let fixture: ComponentFixture<Feature52Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
