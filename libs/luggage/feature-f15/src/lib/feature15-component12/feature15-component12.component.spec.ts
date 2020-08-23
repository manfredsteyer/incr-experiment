import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component12Component } from './feature15-component12.component';

describe('Feature15Component12Component', () => {
  let component: Feature15Component12Component;
  let fixture: ComponentFixture<Feature15Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
