import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component15Component } from './feature13-component15.component';

describe('Feature13Component15Component', () => {
  let component: Feature13Component15Component;
  let fixture: ComponentFixture<Feature13Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature13Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
