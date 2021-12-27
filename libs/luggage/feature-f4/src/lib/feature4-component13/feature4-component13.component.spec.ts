import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component13Component } from './feature4-component13.component';

describe('Feature4Component13Component', () => {
  let component: Feature4Component13Component;
  let fixture: ComponentFixture<Feature4Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
