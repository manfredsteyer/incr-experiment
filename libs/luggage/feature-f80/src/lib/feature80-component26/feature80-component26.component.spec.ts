import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature80Component26Component } from './feature80-component26.component';

describe('Feature80Component26Component', () => {
  let component: Feature80Component26Component;
  let fixture: ComponentFixture<Feature80Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature80Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature80Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
