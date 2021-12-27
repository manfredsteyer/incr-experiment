import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component29Component } from './feature91-component29.component';

describe('Feature91Component29Component', () => {
  let component: Feature91Component29Component;
  let fixture: ComponentFixture<Feature91Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature91Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
