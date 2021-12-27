import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component15Component } from './feature60-component15.component';

describe('Feature60Component15Component', () => {
  let component: Feature60Component15Component;
  let fixture: ComponentFixture<Feature60Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature60Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
