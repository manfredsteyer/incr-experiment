import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component24Component } from './feature91-component24.component';

describe('Feature91Component24Component', () => {
  let component: Feature91Component24Component;
  let fixture: ComponentFixture<Feature91Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
