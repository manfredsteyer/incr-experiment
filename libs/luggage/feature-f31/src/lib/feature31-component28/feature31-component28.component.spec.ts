import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component28Component } from './feature31-component28.component';

describe('Feature31Component28Component', () => {
  let component: Feature31Component28Component;
  let fixture: ComponentFixture<Feature31Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature31Component28Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
