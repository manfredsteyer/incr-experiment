import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component12Component } from './feature60-component12.component';

describe('Feature60Component12Component', () => {
  let component: Feature60Component12Component;
  let fixture: ComponentFixture<Feature60Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
