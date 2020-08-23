import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component18Component } from './feature35-component18.component';

describe('Feature35Component18Component', () => {
  let component: Feature35Component18Component;
  let fixture: ComponentFixture<Feature35Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature35Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
