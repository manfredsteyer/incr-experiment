import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature65Component9Component } from './feature65-component9.component';

describe('Feature65Component9Component', () => {
  let component: Feature65Component9Component;
  let fixture: ComponentFixture<Feature65Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature65Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature65Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
