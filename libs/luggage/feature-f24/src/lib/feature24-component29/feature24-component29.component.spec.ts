import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component29Component } from './feature24-component29.component';

describe('Feature24Component29Component', () => {
  let component: Feature24Component29Component;
  let fixture: ComponentFixture<Feature24Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature24Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
