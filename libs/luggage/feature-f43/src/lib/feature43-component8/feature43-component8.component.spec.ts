import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component8Component } from './feature43-component8.component';

describe('Feature43Component8Component', () => {
  let component: Feature43Component8Component;
  let fixture: ComponentFixture<Feature43Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component8Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
