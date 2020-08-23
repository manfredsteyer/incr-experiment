import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component18Component } from './feature74-component18.component';

describe('Feature74Component18Component', () => {
  let component: Feature74Component18Component;
  let fixture: ComponentFixture<Feature74Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
