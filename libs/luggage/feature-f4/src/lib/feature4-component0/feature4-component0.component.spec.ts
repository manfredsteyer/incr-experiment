import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component0Component } from './feature4-component0.component';

describe('Feature4Component0Component', () => {
  let component: Feature4Component0Component;
  let fixture: ComponentFixture<Feature4Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature4Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
