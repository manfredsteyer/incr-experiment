import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component22Component } from './feature85-component22.component';

describe('Feature85Component22Component', () => {
  let component: Feature85Component22Component;
  let fixture: ComponentFixture<Feature85Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
