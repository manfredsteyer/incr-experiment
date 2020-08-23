import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component24Component } from './feature64-component24.component';

describe('Feature64Component24Component', () => {
  let component: Feature64Component24Component;
  let fixture: ComponentFixture<Feature64Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature64Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
