import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component13Component } from './feature56-component13.component';

describe('Feature56Component13Component', () => {
  let component: Feature56Component13Component;
  let fixture: ComponentFixture<Feature56Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature56Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
