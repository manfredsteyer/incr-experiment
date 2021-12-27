import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component21Component } from './feature33-component21.component';

describe('Feature33Component21Component', () => {
  let component: Feature33Component21Component;
  let fixture: ComponentFixture<Feature33Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
