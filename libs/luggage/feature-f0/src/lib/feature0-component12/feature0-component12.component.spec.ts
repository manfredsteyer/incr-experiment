import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component12Component } from './feature0-component12.component';

describe('Feature0Component12Component', () => {
  let component: Feature0Component12Component;
  let fixture: ComponentFixture<Feature0Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
