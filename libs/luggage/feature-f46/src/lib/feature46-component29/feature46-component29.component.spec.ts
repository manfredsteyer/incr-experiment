import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component29Component } from './feature46-component29.component';

describe('Feature46Component29Component', () => {
  let component: Feature46Component29Component;
  let fixture: ComponentFixture<Feature46Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature46Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
