import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component22Component } from './feature44-component22.component';

describe('Feature44Component22Component', () => {
  let component: Feature44Component22Component;
  let fixture: ComponentFixture<Feature44Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
