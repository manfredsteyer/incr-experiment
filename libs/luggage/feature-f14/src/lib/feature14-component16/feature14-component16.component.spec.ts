import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component16Component } from './feature14-component16.component';

describe('Feature14Component16Component', () => {
  let component: Feature14Component16Component;
  let fixture: ComponentFixture<Feature14Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
