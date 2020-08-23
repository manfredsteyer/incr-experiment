import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component28Component } from './feature1-component28.component';

describe('Feature1Component28Component', () => {
  let component: Feature1Component28Component;
  let fixture: ComponentFixture<Feature1Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
