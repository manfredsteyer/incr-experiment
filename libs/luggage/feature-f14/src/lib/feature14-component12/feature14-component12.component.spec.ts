import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component12Component } from './feature14-component12.component';

describe('Feature14Component12Component', () => {
  let component: Feature14Component12Component;
  let fixture: ComponentFixture<Feature14Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
