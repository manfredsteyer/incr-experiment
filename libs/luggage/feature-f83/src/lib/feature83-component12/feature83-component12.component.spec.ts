import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component12Component } from './feature83-component12.component';

describe('Feature83Component12Component', () => {
  let component: Feature83Component12Component;
  let fixture: ComponentFixture<Feature83Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature83Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
