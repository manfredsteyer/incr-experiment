import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component13Component } from './feature86-component13.component';

describe('Feature86Component13Component', () => {
  let component: Feature86Component13Component;
  let fixture: ComponentFixture<Feature86Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
