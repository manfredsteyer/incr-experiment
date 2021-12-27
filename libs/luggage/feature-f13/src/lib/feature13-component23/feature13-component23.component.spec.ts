import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component23Component } from './feature13-component23.component';

describe('Feature13Component23Component', () => {
  let component: Feature13Component23Component;
  let fixture: ComponentFixture<Feature13Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
