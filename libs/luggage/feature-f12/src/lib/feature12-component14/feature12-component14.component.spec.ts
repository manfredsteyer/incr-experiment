import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component14Component } from './feature12-component14.component';

describe('Feature12Component14Component', () => {
  let component: Feature12Component14Component;
  let fixture: ComponentFixture<Feature12Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
