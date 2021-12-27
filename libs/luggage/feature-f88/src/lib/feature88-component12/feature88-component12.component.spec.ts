import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component12Component } from './feature88-component12.component';

describe('Feature88Component12Component', () => {
  let component: Feature88Component12Component;
  let fixture: ComponentFixture<Feature88Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
