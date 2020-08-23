import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component12Component } from './feature46-component12.component';

describe('Feature46Component12Component', () => {
  let component: Feature46Component12Component;
  let fixture: ComponentFixture<Feature46Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
