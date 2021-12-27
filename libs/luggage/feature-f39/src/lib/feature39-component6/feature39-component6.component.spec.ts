import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component6Component } from './feature39-component6.component';

describe('Feature39Component6Component', () => {
  let component: Feature39Component6Component;
  let fixture: ComponentFixture<Feature39Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
