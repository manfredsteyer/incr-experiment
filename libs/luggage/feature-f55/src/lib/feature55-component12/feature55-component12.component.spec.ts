import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component12Component } from './feature55-component12.component';

describe('Feature55Component12Component', () => {
  let component: Feature55Component12Component;
  let fixture: ComponentFixture<Feature55Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
