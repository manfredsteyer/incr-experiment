import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature64Component29Component } from './feature64-component29.component';

describe('Feature64Component29Component', () => {
  let component: Feature64Component29Component;
  let fixture: ComponentFixture<Feature64Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature64Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature64Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
