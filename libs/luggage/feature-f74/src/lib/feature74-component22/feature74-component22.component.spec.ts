import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component22Component } from './feature74-component22.component';

describe('Feature74Component22Component', () => {
  let component: Feature74Component22Component;
  let fixture: ComponentFixture<Feature74Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature74Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
