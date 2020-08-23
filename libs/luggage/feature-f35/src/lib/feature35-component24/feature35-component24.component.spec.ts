import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component24Component } from './feature35-component24.component';

describe('Feature35Component24Component', () => {
  let component: Feature35Component24Component;
  let fixture: ComponentFixture<Feature35Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
