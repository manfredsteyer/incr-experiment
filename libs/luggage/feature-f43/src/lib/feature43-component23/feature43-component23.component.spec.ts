import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component23Component } from './feature43-component23.component';

describe('Feature43Component23Component', () => {
  let component: Feature43Component23Component;
  let fixture: ComponentFixture<Feature43Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
