import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component13Component } from './feature65-component13.component';

describe('Feature65Component13Component', () => {
  let component: Feature65Component13Component;
  let fixture: ComponentFixture<Feature65Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
