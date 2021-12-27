import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component12Component } from './feature2-component12.component';

describe('Feature2Component12Component', () => {
  let component: Feature2Component12Component;
  let fixture: ComponentFixture<Feature2Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature2Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
