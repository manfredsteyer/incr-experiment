import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component23Component } from './feature35-component23.component';

describe('Feature35Component23Component', () => {
  let component: Feature35Component23Component;
  let fixture: ComponentFixture<Feature35Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component23Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
