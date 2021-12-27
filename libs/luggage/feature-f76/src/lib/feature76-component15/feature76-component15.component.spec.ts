import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component15Component } from './feature76-component15.component';

describe('Feature76Component15Component', () => {
  let component: Feature76Component15Component;
  let fixture: ComponentFixture<Feature76Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
