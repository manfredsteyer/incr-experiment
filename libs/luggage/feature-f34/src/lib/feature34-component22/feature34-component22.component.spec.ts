import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component22Component } from './feature34-component22.component';

describe('Feature34Component22Component', () => {
  let component: Feature34Component22Component;
  let fixture: ComponentFixture<Feature34Component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component22Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
