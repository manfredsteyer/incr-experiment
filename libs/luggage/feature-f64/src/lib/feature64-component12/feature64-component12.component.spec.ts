import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component12Component } from './feature64-component12.component';

describe('Feature64Component12Component', () => {
  let component: Feature64Component12Component;
  let fixture: ComponentFixture<Feature64Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
