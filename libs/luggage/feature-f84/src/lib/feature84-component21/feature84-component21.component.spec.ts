import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component21Component } from './feature84-component21.component';

describe('Feature84Component21Component', () => {
  let component: Feature84Component21Component;
  let fixture: ComponentFixture<Feature84Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature84Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
