import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature57Component15Component } from './feature57-component15.component';

describe('Feature57Component15Component', () => {
  let component: Feature57Component15Component;
  let fixture: ComponentFixture<Feature57Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature57Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature57Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
