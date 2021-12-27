import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component0Component } from './feature35-component0.component';

describe('Feature35Component0Component', () => {
  let component: Feature35Component0Component;
  let fixture: ComponentFixture<Feature35Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component0Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
