import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component20Component } from './feature48-component20.component';

describe('Feature48Component20Component', () => {
  let component: Feature48Component20Component;
  let fixture: ComponentFixture<Feature48Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature48Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
