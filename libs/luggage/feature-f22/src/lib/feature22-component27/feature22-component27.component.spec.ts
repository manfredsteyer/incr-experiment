import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component27Component } from './feature22-component27.component';

describe('Feature22Component27Component', () => {
  let component: Feature22Component27Component;
  let fixture: ComponentFixture<Feature22Component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component27Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
