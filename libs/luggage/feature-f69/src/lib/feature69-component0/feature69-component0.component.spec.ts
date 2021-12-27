import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component0Component } from './feature69-component0.component';

describe('Feature69Component0Component', () => {
  let component: Feature69Component0Component;
  let fixture: ComponentFixture<Feature69Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature69Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
