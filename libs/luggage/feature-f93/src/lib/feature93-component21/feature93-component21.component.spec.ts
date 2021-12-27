import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature93Component21Component } from './feature93-component21.component';

describe('Feature93Component21Component', () => {
  let component: Feature93Component21Component;
  let fixture: ComponentFixture<Feature93Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature93Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature93Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
