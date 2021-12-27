import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component12Component } from './feature12-component12.component';

describe('Feature12Component12Component', () => {
  let component: Feature12Component12Component;
  let fixture: ComponentFixture<Feature12Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
