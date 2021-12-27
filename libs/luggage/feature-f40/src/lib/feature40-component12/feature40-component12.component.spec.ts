import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature40Component12Component } from './feature40-component12.component';

describe('Feature40Component12Component', () => {
  let component: Feature40Component12Component;
  let fixture: ComponentFixture<Feature40Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature40Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature40Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
