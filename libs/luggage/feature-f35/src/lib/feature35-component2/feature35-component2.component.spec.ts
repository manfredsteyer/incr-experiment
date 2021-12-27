import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component2Component } from './feature35-component2.component';

describe('Feature35Component2Component', () => {
  let component: Feature35Component2Component;
  let fixture: ComponentFixture<Feature35Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
