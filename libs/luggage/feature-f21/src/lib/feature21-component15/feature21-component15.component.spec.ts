import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component15Component } from './feature21-component15.component';

describe('Feature21Component15Component', () => {
  let component: Feature21Component15Component;
  let fixture: ComponentFixture<Feature21Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
