import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component0Component } from './feature48-component0.component';

describe('Feature48Component0Component', () => {
  let component: Feature48Component0Component;
  let fixture: ComponentFixture<Feature48Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
