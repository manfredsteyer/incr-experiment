import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component5Component } from './feature13-component5.component';

describe('Feature13Component5Component', () => {
  let component: Feature13Component5Component;
  let fixture: ComponentFixture<Feature13Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
