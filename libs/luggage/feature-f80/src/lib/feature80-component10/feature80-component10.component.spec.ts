import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component10Component } from './feature80-component10.component';

describe('Feature80Component10Component', () => {
  let component: Feature80Component10Component;
  let fixture: ComponentFixture<Feature80Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
