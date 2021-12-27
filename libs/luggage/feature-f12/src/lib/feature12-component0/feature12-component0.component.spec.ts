import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component0Component } from './feature12-component0.component';

describe('Feature12Component0Component', () => {
  let component: Feature12Component0Component;
  let fixture: ComponentFixture<Feature12Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
