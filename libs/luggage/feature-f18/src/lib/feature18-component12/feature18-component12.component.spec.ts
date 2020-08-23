import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component12Component } from './feature18-component12.component';

describe('Feature18Component12Component', () => {
  let component: Feature18Component12Component;
  let fixture: ComponentFixture<Feature18Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
