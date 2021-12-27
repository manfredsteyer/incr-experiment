import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature0Component28Component } from './feature0-component28.component';

describe('Feature0Component28Component', () => {
  let component: Feature0Component28Component;
  let fixture: ComponentFixture<Feature0Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature0Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature0Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
