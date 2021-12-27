import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature19Component13Component } from './feature19-component13.component';

describe('Feature19Component13Component', () => {
  let component: Feature19Component13Component;
  let fixture: ComponentFixture<Feature19Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature19Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature19Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
