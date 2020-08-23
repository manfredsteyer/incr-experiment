import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component1Component } from './feature2-component1.component';

describe('Feature2Component1Component', () => {
  let component: Feature2Component1Component;
  let fixture: ComponentFixture<Feature2Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
