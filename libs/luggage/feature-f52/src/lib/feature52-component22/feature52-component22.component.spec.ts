import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature52Component22Component } from './feature52-component22.component';

describe('Feature52Component22Component', () => {
  let component: Feature52Component22Component;
  let fixture: ComponentFixture<Feature52Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature52Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature52Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
