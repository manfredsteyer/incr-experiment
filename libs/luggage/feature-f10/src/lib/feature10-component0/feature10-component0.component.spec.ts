import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component0Component } from './feature10-component0.component';

describe('Feature10Component0Component', () => {
  let component: Feature10Component0Component;
  let fixture: ComponentFixture<Feature10Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
