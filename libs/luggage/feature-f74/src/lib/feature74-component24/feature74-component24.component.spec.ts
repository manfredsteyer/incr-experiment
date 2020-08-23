import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component24Component } from './feature74-component24.component';

describe('Feature74Component24Component', () => {
  let component: Feature74Component24Component;
  let fixture: ComponentFixture<Feature74Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
