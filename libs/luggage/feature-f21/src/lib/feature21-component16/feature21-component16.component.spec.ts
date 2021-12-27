import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component16Component } from './feature21-component16.component';

describe('Feature21Component16Component', () => {
  let component: Feature21Component16Component;
  let fixture: ComponentFixture<Feature21Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
