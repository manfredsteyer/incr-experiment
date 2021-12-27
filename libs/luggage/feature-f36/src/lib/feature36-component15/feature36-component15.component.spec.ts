import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component15Component } from './feature36-component15.component';

describe('Feature36Component15Component', () => {
  let component: Feature36Component15Component;
  let fixture: ComponentFixture<Feature36Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature36Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
