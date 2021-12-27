import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component20Component } from './feature35-component20.component';

describe('Feature35Component20Component', () => {
  let component: Feature35Component20Component;
  let fixture: ComponentFixture<Feature35Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
