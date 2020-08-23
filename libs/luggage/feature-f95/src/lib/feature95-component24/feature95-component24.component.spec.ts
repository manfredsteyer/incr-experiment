import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component24Component } from './feature95-component24.component';

describe('Feature95Component24Component', () => {
  let component: Feature95Component24Component;
  let fixture: ComponentFixture<Feature95Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
