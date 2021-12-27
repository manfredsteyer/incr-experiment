import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component13Component } from './feature68-component13.component';

describe('Feature68Component13Component', () => {
  let component: Feature68Component13Component;
  let fixture: ComponentFixture<Feature68Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
