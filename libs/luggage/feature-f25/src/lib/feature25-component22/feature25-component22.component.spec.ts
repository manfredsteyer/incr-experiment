import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component22Component } from './feature25-component22.component';

describe('Feature25Component22Component', () => {
  let component: Feature25Component22Component;
  let fixture: ComponentFixture<Feature25Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
