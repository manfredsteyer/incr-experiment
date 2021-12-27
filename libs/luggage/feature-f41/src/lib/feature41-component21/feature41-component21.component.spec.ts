import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component21Component } from './feature41-component21.component';

describe('Feature41Component21Component', () => {
  let component: Feature41Component21Component;
  let fixture: ComponentFixture<Feature41Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature41Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
