import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component21Component } from './feature34-component21.component';

describe('Feature34Component21Component', () => {
  let component: Feature34Component21Component;
  let fixture: ComponentFixture<Feature34Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
