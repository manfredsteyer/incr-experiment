import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component28Component } from './feature43-component28.component';

describe('Feature43Component28Component', () => {
  let component: Feature43Component28Component;
  let fixture: ComponentFixture<Feature43Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature43Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
