import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component15Component } from './feature0-component15.component';

describe('Feature0Component15Component', () => {
  let component: Feature0Component15Component;
  let fixture: ComponentFixture<Feature0Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
