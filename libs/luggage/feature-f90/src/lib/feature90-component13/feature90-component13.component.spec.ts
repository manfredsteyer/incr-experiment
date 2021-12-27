import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component13Component } from './feature90-component13.component';

describe('Feature90Component13Component', () => {
  let component: Feature90Component13Component;
  let fixture: ComponentFixture<Feature90Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
