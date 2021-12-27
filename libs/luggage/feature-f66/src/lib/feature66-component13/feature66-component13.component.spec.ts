import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component13Component } from './feature66-component13.component';

describe('Feature66Component13Component', () => {
  let component: Feature66Component13Component;
  let fixture: ComponentFixture<Feature66Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
