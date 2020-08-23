import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component12Component } from './feature33-component12.component';

describe('Feature33Component12Component', () => {
  let component: Feature33Component12Component;
  let fixture: ComponentFixture<Feature33Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
