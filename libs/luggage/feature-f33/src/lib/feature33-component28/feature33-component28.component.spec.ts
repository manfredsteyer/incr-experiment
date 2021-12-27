import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature33Component28Component } from './feature33-component28.component';

describe('Feature33Component28Component', () => {
  let component: Feature33Component28Component;
  let fixture: ComponentFixture<Feature33Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature33Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature33Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
