import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component1Component } from './feature12-component1.component';

describe('Feature12Component1Component', () => {
  let component: Feature12Component1Component;
  let fixture: ComponentFixture<Feature12Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
