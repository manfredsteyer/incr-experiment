import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component20Component } from './feature40-component20.component';

describe('Feature40Component20Component', () => {
  let component: Feature40Component20Component;
  let fixture: ComponentFixture<Feature40Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature40Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});