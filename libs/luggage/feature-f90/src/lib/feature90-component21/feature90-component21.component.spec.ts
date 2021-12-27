import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature90Component21Component } from './feature90-component21.component';

describe('Feature90Component21Component', () => {
  let component: Feature90Component21Component;
  let fixture: ComponentFixture<Feature90Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature90Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature90Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
