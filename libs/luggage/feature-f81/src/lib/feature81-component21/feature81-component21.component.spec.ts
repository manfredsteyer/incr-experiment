import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component21Component } from './feature81-component21.component';

describe('Feature81Component21Component', () => {
  let component: Feature81Component21Component;
  let fixture: ComponentFixture<Feature81Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature81Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
