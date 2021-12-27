import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component13Component } from './feature29-component13.component';

describe('Feature29Component13Component', () => {
  let component: Feature29Component13Component;
  let fixture: ComponentFixture<Feature29Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature29Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
