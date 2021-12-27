import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component13Component } from './feature47-component13.component';

describe('Feature47Component13Component', () => {
  let component: Feature47Component13Component;
  let fixture: ComponentFixture<Feature47Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
