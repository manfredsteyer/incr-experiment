import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component21Component } from './feature48-component21.component';

describe('Feature48Component21Component', () => {
  let component: Feature48Component21Component;
  let fixture: ComponentFixture<Feature48Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
