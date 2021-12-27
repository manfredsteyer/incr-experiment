import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component13Component } from './feature98-component13.component';

describe('Feature98Component13Component', () => {
  let component: Feature98Component13Component;
  let fixture: ComponentFixture<Feature98Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature98Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
