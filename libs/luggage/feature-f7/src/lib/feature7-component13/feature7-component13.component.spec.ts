import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component13Component } from './feature7-component13.component';

describe('Feature7Component13Component', () => {
  let component: Feature7Component13Component;
  let fixture: ComponentFixture<Feature7Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature7Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
