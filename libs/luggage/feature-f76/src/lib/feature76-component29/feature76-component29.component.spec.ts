import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component29Component } from './feature76-component29.component';

describe('Feature76Component29Component', () => {
  let component: Feature76Component29Component;
  let fixture: ComponentFixture<Feature76Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature76Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
