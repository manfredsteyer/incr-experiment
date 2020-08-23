import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component20Component } from './feature44-component20.component';

describe('Feature44Component20Component', () => {
  let component: Feature44Component20Component;
  let fixture: ComponentFixture<Feature44Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
