import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component29Component } from './feature85-component29.component';

describe('Feature85Component29Component', () => {
  let component: Feature85Component29Component;
  let fixture: ComponentFixture<Feature85Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature85Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
