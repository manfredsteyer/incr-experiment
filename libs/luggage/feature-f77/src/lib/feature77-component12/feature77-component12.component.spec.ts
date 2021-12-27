import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature77Component12Component } from './feature77-component12.component';

describe('Feature77Component12Component', () => {
  let component: Feature77Component12Component;
  let fixture: ComponentFixture<Feature77Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature77Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature77Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
