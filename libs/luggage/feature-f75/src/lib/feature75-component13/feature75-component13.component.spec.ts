import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component13Component } from './feature75-component13.component';

describe('Feature75Component13Component', () => {
  let component: Feature75Component13Component;
  let fixture: ComponentFixture<Feature75Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
