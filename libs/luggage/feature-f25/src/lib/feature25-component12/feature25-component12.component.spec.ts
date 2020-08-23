import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component12Component } from './feature25-component12.component';

describe('Feature25Component12Component', () => {
  let component: Feature25Component12Component;
  let fixture: ComponentFixture<Feature25Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature25Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
