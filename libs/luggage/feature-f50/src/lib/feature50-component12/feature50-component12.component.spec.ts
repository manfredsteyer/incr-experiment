import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component12Component } from './feature50-component12.component';

describe('Feature50Component12Component', () => {
  let component: Feature50Component12Component;
  let fixture: ComponentFixture<Feature50Component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature50Component12Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
