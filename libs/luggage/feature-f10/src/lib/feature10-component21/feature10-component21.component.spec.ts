import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component21Component } from './feature10-component21.component';

describe('Feature10Component21Component', () => {
  let component: Feature10Component21Component;
  let fixture: ComponentFixture<Feature10Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature10Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
