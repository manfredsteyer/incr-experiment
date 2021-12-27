import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component0Component } from './feature22-component0.component';

describe('Feature22Component0Component', () => {
  let component: Feature22Component0Component;
  let fixture: ComponentFixture<Feature22Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
