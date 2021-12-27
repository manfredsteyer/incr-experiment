import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature22Component21Component } from './feature22-component21.component';

describe('Feature22Component21Component', () => {
  let component: Feature22Component21Component;
  let fixture: ComponentFixture<Feature22Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature22Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature22Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
