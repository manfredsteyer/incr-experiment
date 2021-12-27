import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature3Component22Component } from './feature3-component22.component';

describe('Feature3Component22Component', () => {
  let component: Feature3Component22Component;
  let fixture: ComponentFixture<Feature3Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature3Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature3Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
