import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature35Component21Component } from './feature35-component21.component';

describe('Feature35Component21Component', () => {
  let component: Feature35Component21Component;
  let fixture: ComponentFixture<Feature35Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature35Component21Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature35Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
