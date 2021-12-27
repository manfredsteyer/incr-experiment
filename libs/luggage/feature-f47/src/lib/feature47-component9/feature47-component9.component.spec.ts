import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature47Component9Component } from './feature47-component9.component';

describe('Feature47Component9Component', () => {
  let component: Feature47Component9Component;
  let fixture: ComponentFixture<Feature47Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature47Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature47Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
