import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component21Component } from './feature31-component21.component';

describe('Feature31Component21Component', () => {
  let component: Feature31Component21Component;
  let fixture: ComponentFixture<Feature31Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
