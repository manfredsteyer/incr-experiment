import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component15Component } from './feature85-component15.component';

describe('Feature85Component15Component', () => {
  let component: Feature85Component15Component;
  let fixture: ComponentFixture<Feature85Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
