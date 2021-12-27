import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature9Component25Component } from './feature9-component25.component';

describe('Feature9Component25Component', () => {
  let component: Feature9Component25Component;
  let fixture: ComponentFixture<Feature9Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature9Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature9Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
