import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component0Component } from './feature83-component0.component';

describe('Feature83Component0Component', () => {
  let component: Feature83Component0Component;
  let fixture: ComponentFixture<Feature83Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
