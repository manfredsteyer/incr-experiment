import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component12Component } from './feature24-component12.component';

describe('Feature24Component12Component', () => {
  let component: Feature24Component12Component;
  let fixture: ComponentFixture<Feature24Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
