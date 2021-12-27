import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature63Component13Component } from './feature63-component13.component';

describe('Feature63Component13Component', () => {
  let component: Feature63Component13Component;
  let fixture: ComponentFixture<Feature63Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature63Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature63Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
