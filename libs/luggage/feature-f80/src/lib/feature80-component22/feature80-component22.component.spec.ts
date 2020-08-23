import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component22Component } from './feature80-component22.component';

describe('Feature80Component22Component', () => {
  let component: Feature80Component22Component;
  let fixture: ComponentFixture<Feature80Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
