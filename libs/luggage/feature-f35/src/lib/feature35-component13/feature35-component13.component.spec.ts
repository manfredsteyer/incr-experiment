import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component13Component } from './feature35-component13.component';

describe('Feature35Component13Component', () => {
  let component: Feature35Component13Component;
  let fixture: ComponentFixture<Feature35Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
