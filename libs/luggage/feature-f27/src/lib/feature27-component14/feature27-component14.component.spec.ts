import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature27Component14Component } from './feature27-component14.component';

describe('Feature27Component14Component', () => {
  let component: Feature27Component14Component;
  let fixture: ComponentFixture<Feature27Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature27Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature27Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
