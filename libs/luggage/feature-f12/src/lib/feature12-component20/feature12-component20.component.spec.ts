import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component20Component } from './feature12-component20.component';

describe('Feature12Component20Component', () => {
  let component: Feature12Component20Component;
  let fixture: ComponentFixture<Feature12Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
