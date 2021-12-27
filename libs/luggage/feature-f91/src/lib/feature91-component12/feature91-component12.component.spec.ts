import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component12Component } from './feature91-component12.component';

describe('Feature91Component12Component', () => {
  let component: Feature91Component12Component;
  let fixture: ComponentFixture<Feature91Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
