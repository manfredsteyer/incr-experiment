import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component0Component } from './feature72-component0.component';

describe('Feature72Component0Component', () => {
  let component: Feature72Component0Component;
  let fixture: ComponentFixture<Feature72Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
