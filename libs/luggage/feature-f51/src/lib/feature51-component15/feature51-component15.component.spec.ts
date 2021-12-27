import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component15Component } from './feature51-component15.component';

describe('Feature51Component15Component', () => {
  let component: Feature51Component15Component;
  let fixture: ComponentFixture<Feature51Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature51Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
