import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component12Component } from './feature80-component12.component';

describe('Feature80Component12Component', () => {
  let component: Feature80Component12Component;
  let fixture: ComponentFixture<Feature80Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
