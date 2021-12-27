import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component1Component } from './feature35-component1.component';

describe('Feature35Component1Component', () => {
  let component: Feature35Component1Component;
  let fixture: ComponentFixture<Feature35Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component1Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
