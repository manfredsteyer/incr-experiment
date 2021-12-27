import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component12Component } from './feature32-component12.component';

describe('Feature32Component12Component', () => {
  let component: Feature32Component12Component;
  let fixture: ComponentFixture<Feature32Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
