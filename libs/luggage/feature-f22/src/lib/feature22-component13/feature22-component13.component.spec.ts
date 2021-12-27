import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component13Component } from './feature22-component13.component';

describe('Feature22Component13Component', () => {
  let component: Feature22Component13Component;
  let fixture: ComponentFixture<Feature22Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component13Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
