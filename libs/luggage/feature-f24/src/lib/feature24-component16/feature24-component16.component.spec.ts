import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component16Component } from './feature24-component16.component';

describe('Feature24Component16Component', () => {
  let component: Feature24Component16Component;
  let fixture: ComponentFixture<Feature24Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component16Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
