import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component8Component } from './feature13-component8.component';

describe('Feature13Component8Component', () => {
  let component: Feature13Component8Component;
  let fixture: ComponentFixture<Feature13Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
