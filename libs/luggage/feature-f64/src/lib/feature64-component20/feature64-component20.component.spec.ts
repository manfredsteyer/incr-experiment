import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component20Component } from './feature64-component20.component';

describe('Feature64Component20Component', () => {
  let component: Feature64Component20Component;
  let fixture: ComponentFixture<Feature64Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
