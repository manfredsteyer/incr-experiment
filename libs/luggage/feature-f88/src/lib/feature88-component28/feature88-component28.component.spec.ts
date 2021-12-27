import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature88Component28Component } from './feature88-component28.component';

describe('Feature88Component28Component', () => {
  let component: Feature88Component28Component;
  let fixture: ComponentFixture<Feature88Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature88Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature88Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
