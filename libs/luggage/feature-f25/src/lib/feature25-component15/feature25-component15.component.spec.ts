import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature25Component15Component } from './feature25-component15.component';

describe('Feature25Component15Component', () => {
  let component: Feature25Component15Component;
  let fixture: ComponentFixture<Feature25Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature25Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature25Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
