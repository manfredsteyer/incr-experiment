import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component15Component } from './feature14-component15.component';

describe('Feature14Component15Component', () => {
  let component: Feature14Component15Component;
  let fixture: ComponentFixture<Feature14Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature14Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
