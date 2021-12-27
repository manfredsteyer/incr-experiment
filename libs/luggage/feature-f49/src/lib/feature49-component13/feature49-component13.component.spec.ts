import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component13Component } from './feature49-component13.component';

describe('Feature49Component13Component', () => {
  let component: Feature49Component13Component;
  let fixture: ComponentFixture<Feature49Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature49Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
