import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature21Component29Component } from './feature21-component29.component';

describe('Feature21Component29Component', () => {
  let component: Feature21Component29Component;
  let fixture: ComponentFixture<Feature21Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature21Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature21Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
