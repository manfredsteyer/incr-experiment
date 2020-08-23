import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component12Component } from './feature21-component12.component';

describe('Feature21Component12Component', () => {
  let component: Feature21Component12Component;
  let fixture: ComponentFixture<Feature21Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature21Component12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
