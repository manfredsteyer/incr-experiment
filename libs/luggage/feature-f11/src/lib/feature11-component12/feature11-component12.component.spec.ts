import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component12Component } from './feature11-component12.component';

describe('Feature11Component12Component', () => {
  let component: Feature11Component12Component;
  let fixture: ComponentFixture<Feature11Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature11Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
