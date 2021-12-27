import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component15Component } from './feature33-component15.component';

describe('Feature33Component15Component', () => {
  let component: Feature33Component15Component;
  let fixture: ComponentFixture<Feature33Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
