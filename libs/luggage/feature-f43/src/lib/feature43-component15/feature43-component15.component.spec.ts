import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component15Component } from './feature43-component15.component';

describe('Feature43Component15Component', () => {
  let component: Feature43Component15Component;
  let fixture: ComponentFixture<Feature43Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
