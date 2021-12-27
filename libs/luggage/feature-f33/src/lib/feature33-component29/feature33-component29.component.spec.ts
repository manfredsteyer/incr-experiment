import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component29Component } from './feature33-component29.component';

describe('Feature33Component29Component', () => {
  let component: Feature33Component29Component;
  let fixture: ComponentFixture<Feature33Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
