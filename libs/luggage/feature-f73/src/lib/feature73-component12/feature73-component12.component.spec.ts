import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature73Component12Component } from './feature73-component12.component';

describe('Feature73Component12Component', () => {
  let component: Feature73Component12Component;
  let fixture: ComponentFixture<Feature73Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature73Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature73Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
