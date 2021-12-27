import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component13Component } from './feature83-component13.component';

describe('Feature83Component13Component', () => {
  let component: Feature83Component13Component;
  let fixture: ComponentFixture<Feature83Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
