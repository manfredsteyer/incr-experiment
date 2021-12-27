import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component0Component } from './feature5-component0.component';

describe('Feature5Component0Component', () => {
  let component: Feature5Component0Component;
  let fixture: ComponentFixture<Feature5Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature5Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
