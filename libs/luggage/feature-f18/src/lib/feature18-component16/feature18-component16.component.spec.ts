import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component16Component } from './feature18-component16.component';

describe('Feature18Component16Component', () => {
  let component: Feature18Component16Component;
  let fixture: ComponentFixture<Feature18Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});