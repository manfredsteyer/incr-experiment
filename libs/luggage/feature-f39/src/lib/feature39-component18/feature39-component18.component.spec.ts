import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component18Component } from './feature39-component18.component';

describe('Feature39Component18Component', () => {
  let component: Feature39Component18Component;
  let fixture: ComponentFixture<Feature39Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
