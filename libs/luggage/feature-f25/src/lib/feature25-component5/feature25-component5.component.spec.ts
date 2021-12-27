import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component5Component } from './feature25-component5.component';

describe('Feature25Component5Component', () => {
  let component: Feature25Component5Component;
  let fixture: ComponentFixture<Feature25Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
