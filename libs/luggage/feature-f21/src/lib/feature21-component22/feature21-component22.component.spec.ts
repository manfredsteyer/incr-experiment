import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component22Component } from './feature21-component22.component';

describe('Feature21Component22Component', () => {
  let component: Feature21Component22Component;
  let fixture: ComponentFixture<Feature21Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
