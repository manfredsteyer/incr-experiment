import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature1Component29Component } from './feature1-component29.component';

describe('Feature1Component29Component', () => {
  let component: Feature1Component29Component;
  let fixture: ComponentFixture<Feature1Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature1Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature1Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
