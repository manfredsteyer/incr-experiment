import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component5Component } from './feature1-component5.component';

describe('Feature1Component5Component', () => {
  let component: Feature1Component5Component;
  let fixture: ComponentFixture<Feature1Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
