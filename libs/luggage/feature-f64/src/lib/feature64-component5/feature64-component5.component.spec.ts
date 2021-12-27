import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component5Component } from './feature64-component5.component';

describe('Feature64Component5Component', () => {
  let component: Feature64Component5Component;
  let fixture: ComponentFixture<Feature64Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
