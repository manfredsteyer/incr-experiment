import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component0Component } from './feature34-component0.component';

describe('Feature34Component0Component', () => {
  let component: Feature34Component0Component;
  let fixture: ComponentFixture<Feature34Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
