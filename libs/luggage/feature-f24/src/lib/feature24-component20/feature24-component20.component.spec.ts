import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component20Component } from './feature24-component20.component';

describe('Feature24Component20Component', () => {
  let component: Feature24Component20Component;
  let fixture: ComponentFixture<Feature24Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
