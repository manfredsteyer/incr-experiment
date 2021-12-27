import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component29Component } from './feature0-component29.component';

describe('Feature0Component29Component', () => {
  let component: Feature0Component29Component;
  let fixture: ComponentFixture<Feature0Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component29Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
