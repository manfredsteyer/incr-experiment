import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component13Component } from './feature30-component13.component';

describe('Feature30Component13Component', () => {
  let component: Feature30Component13Component;
  let fixture: ComponentFixture<Feature30Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature30Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
