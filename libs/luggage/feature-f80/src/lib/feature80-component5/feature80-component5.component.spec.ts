import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component5Component } from './feature80-component5.component';

describe('Feature80Component5Component', () => {
  let component: Feature80Component5Component;
  let fixture: ComponentFixture<Feature80Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
