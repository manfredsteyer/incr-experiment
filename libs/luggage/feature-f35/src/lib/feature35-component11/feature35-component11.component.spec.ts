import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component11Component } from './feature35-component11.component';

describe('Feature35Component11Component', () => {
  let component: Feature35Component11Component;
  let fixture: ComponentFixture<Feature35Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component11Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
