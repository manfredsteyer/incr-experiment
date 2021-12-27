import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component21Component } from './feature75-component21.component';

describe('Feature75Component21Component', () => {
  let component: Feature75Component21Component;
  let fixture: ComponentFixture<Feature75Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature75Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
