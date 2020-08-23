import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component20Component } from './feature2-component20.component';

describe('Feature2Component20Component', () => {
  let component: Feature2Component20Component;
  let fixture: ComponentFixture<Feature2Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
