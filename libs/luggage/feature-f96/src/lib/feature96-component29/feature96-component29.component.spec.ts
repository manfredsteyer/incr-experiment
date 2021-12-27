import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component29Component } from './feature96-component29.component';

describe('Feature96Component29Component', () => {
  let component: Feature96Component29Component;
  let fixture: ComponentFixture<Feature96Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature96Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
