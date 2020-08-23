import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component8Component } from './feature74-component8.component';

describe('Feature74Component8Component', () => {
  let component: Feature74Component8Component;
  let fixture: ComponentFixture<Feature74Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
