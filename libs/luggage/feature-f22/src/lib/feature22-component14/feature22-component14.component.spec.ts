import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component14Component } from './feature22-component14.component';

describe('Feature22Component14Component', () => {
  let component: Feature22Component14Component;
  let fixture: ComponentFixture<Feature22Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
