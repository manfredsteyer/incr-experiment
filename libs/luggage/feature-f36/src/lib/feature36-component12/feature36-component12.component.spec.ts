import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component12Component } from './feature36-component12.component';

describe('Feature36Component12Component', () => {
  let component: Feature36Component12Component;
  let fixture: ComponentFixture<Feature36Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
