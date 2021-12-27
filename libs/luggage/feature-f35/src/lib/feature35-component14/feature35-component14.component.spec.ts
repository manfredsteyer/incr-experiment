import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component14Component } from './feature35-component14.component';

describe('Feature35Component14Component', () => {
  let component: Feature35Component14Component;
  let fixture: ComponentFixture<Feature35Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component14Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
