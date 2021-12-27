import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component16Component } from './feature57-component16.component';

describe('Feature57Component16Component', () => {
  let component: Feature57Component16Component;
  let fixture: ComponentFixture<Feature57Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
