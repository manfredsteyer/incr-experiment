import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component14Component } from './feature2-component14.component';

describe('Feature2Component14Component', () => {
  let component: Feature2Component14Component;
  let fixture: ComponentFixture<Feature2Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
