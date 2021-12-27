import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component15Component } from './feature64-component15.component';

describe('Feature64Component15Component', () => {
  let component: Feature64Component15Component;
  let fixture: ComponentFixture<Feature64Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
