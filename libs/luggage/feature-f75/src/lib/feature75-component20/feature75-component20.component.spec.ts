import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component20Component } from './feature75-component20.component';

describe('Feature75Component20Component', () => {
  let component: Feature75Component20Component;
  let fixture: ComponentFixture<Feature75Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
