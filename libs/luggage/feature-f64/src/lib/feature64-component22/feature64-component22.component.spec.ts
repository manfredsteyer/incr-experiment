import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component22Component } from './feature64-component22.component';

describe('Feature64Component22Component', () => {
  let component: Feature64Component22Component;
  let fixture: ComponentFixture<Feature64Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
