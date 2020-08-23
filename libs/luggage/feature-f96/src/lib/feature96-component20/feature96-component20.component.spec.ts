import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component20Component } from './feature96-component20.component';

describe('Feature96Component20Component', () => {
  let component: Feature96Component20Component;
  let fixture: ComponentFixture<Feature96Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
