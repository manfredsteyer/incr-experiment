import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component5Component } from './feature35-component5.component';

describe('Feature35Component5Component', () => {
  let component: Feature35Component5Component;
  let fixture: ComponentFixture<Feature35Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component5Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
