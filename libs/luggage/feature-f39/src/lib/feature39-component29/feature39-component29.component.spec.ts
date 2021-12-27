import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component29Component } from './feature39-component29.component';

describe('Feature39Component29Component', () => {
  let component: Feature39Component29Component;
  let fixture: ComponentFixture<Feature39Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature39Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
