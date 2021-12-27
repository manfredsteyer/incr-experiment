import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component12Component } from './feature66-component12.component';

describe('Feature66Component12Component', () => {
  let component: Feature66Component12Component;
  let fixture: ComponentFixture<Feature66Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature66Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
