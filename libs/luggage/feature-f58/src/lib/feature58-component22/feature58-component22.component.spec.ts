import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component22Component } from './feature58-component22.component';

describe('Feature58Component22Component', () => {
  let component: Feature58Component22Component;
  let fixture: ComponentFixture<Feature58Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature58Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
