import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component15Component } from './feature1-component15.component';

describe('Feature1Component15Component', () => {
  let component: Feature1Component15Component;
  let fixture: ComponentFixture<Feature1Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
