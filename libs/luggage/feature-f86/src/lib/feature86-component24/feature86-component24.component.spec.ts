import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component24Component } from './feature86-component24.component';

describe('Feature86Component24Component', () => {
  let component: Feature86Component24Component;
  let fixture: ComponentFixture<Feature86Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature86Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
