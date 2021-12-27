import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component4Component } from './feature80-component4.component';

describe('Feature80Component4Component', () => {
  let component: Feature80Component4Component;
  let fixture: ComponentFixture<Feature80Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component4Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
