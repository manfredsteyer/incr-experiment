import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component6Component } from './feature1-component6.component';

describe('Feature1Component6Component', () => {
  let component: Feature1Component6Component;
  let fixture: ComponentFixture<Feature1Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
