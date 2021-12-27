import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component15Component } from './feature15-component15.component';

describe('Feature15Component15Component', () => {
  let component: Feature15Component15Component;
  let fixture: ComponentFixture<Feature15Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
