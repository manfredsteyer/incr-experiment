import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component7Component } from './feature39-component7.component';

describe('Feature39Component7Component', () => {
  let component: Feature39Component7Component;
  let fixture: ComponentFixture<Feature39Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
