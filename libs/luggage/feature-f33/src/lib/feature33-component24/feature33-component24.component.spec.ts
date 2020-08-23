import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component24Component } from './feature33-component24.component';

describe('Feature33Component24Component', () => {
  let component: Feature33Component24Component;
  let fixture: ComponentFixture<Feature33Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature33Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
