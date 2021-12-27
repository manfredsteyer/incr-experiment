import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component15Component } from './feature12-component15.component';

describe('Feature12Component15Component', () => {
  let component: Feature12Component15Component;
  let fixture: ComponentFixture<Feature12Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature12Component15Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
