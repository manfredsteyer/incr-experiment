import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component12Component } from './feature51-component12.component';

describe('Feature51Component12Component', () => {
  let component: Feature51Component12Component;
  let fixture: ComponentFixture<Feature51Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
