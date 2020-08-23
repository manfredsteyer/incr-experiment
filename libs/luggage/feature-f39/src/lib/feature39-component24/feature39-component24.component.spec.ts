import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component24Component } from './feature39-component24.component';

describe('Feature39Component24Component', () => {
  let component: Feature39Component24Component;
  let fixture: ComponentFixture<Feature39Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
