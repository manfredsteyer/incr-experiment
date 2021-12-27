import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component29Component } from './feature35-component29.component';

describe('Feature35Component29Component', () => {
  let component: Feature35Component29Component;
  let fixture: ComponentFixture<Feature35Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
