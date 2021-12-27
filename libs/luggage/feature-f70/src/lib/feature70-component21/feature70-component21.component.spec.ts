import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component21Component } from './feature70-component21.component';

describe('Feature70Component21Component', () => {
  let component: Feature70Component21Component;
  let fixture: ComponentFixture<Feature70Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature70Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
