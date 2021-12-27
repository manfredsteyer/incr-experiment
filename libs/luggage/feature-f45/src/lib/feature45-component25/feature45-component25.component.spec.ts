import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature45Component25Component } from './feature45-component25.component';

describe('Feature45Component25Component', () => {
  let component: Feature45Component25Component;
  let fixture: ComponentFixture<Feature45Component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature45Component25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature45Component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
