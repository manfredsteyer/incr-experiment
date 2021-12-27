import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component12Component } from './feature76-component12.component';

describe('Feature76Component12Component', () => {
  let component: Feature76Component12Component;
  let fixture: ComponentFixture<Feature76Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
