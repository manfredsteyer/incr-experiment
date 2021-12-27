import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component7Component } from './feature35-component7.component';

describe('Feature35Component7Component', () => {
  let component: Feature35Component7Component;
  let fixture: ComponentFixture<Feature35Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component7Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
