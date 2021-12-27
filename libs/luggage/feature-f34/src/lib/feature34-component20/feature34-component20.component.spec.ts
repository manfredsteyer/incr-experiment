import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component20Component } from './feature34-component20.component';

describe('Feature34Component20Component', () => {
  let component: Feature34Component20Component;
  let fixture: ComponentFixture<Feature34Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature34Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
