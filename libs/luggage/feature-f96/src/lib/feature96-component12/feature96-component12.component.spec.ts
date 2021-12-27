import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component12Component } from './feature96-component12.component';

describe('Feature96Component12Component', () => {
  let component: Feature96Component12Component;
  let fixture: ComponentFixture<Feature96Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
