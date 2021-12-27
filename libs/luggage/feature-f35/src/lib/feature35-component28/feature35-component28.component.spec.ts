import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component28Component } from './feature35-component28.component';

describe('Feature35Component28Component', () => {
  let component: Feature35Component28Component;
  let fixture: ComponentFixture<Feature35Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
