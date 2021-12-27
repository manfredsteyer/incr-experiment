import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component10Component } from './feature13-component10.component';

describe('Feature13Component10Component', () => {
  let component: Feature13Component10Component;
  let fixture: ComponentFixture<Feature13Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component10Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
