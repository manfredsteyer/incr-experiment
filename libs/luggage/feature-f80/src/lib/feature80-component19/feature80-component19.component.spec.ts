import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component19Component } from './feature80-component19.component';

describe('Feature80Component19Component', () => {
  let component: Feature80Component19Component;
  let fixture: ComponentFixture<Feature80Component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature80Component19Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
