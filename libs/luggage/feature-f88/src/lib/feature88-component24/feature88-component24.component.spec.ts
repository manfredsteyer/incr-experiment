import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component24Component } from './feature88-component24.component';

describe('Feature88Component24Component', () => {
  let component: Feature88Component24Component;
  let fixture: ComponentFixture<Feature88Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature88Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
