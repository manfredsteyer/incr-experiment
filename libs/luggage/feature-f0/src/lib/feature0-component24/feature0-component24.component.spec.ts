import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component24Component } from './feature0-component24.component';

describe('Feature0Component24Component', () => {
  let component: Feature0Component24Component;
  let fixture: ComponentFixture<Feature0Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature0Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
