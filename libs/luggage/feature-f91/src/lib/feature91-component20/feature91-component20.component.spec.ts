import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component20Component } from './feature91-component20.component';

describe('Feature91Component20Component', () => {
  let component: Feature91Component20Component;
  let fixture: ComponentFixture<Feature91Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
