import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component22Component } from './feature14-component22.component';

describe('Feature14Component22Component', () => {
  let component: Feature14Component22Component;
  let fixture: ComponentFixture<Feature14Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
