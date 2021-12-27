import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component12Component } from './feature44-component12.component';

describe('Feature44Component12Component', () => {
  let component: Feature44Component12Component;
  let fixture: ComponentFixture<Feature44Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature44Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
