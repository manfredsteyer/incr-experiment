import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component25Component } from './feature80-component25.component';

describe('Feature80Component25Component', () => {
  let component: Feature80Component25Component;
  let fixture: ComponentFixture<Feature80Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});