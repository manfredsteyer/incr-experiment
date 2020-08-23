import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component16Component } from './feature80-component16.component';

describe('Feature80Component16Component', () => {
  let component: Feature80Component16Component;
  let fixture: ComponentFixture<Feature80Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
