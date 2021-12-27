import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component9Component } from './feature22-component9.component';

describe('Feature22Component9Component', () => {
  let component: Feature22Component9Component;
  let fixture: ComponentFixture<Feature22Component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component9Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
