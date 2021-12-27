import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component12Component } from './feature72-component12.component';

describe('Feature72Component12Component', () => {
  let component: Feature72Component12Component;
  let fixture: ComponentFixture<Feature72Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature72Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
