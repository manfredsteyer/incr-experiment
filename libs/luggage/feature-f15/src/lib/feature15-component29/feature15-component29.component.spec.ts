import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component29Component } from './feature15-component29.component';

describe('Feature15Component29Component', () => {
  let component: Feature15Component29Component;
  let fixture: ComponentFixture<Feature15Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature15Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
