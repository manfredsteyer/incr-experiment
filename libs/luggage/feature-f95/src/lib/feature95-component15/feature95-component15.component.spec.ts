import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component15Component } from './feature95-component15.component';

describe('Feature95Component15Component', () => {
  let component: Feature95Component15Component;
  let fixture: ComponentFixture<Feature95Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature95Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
