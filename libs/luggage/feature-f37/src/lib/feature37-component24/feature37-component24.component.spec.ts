import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component24Component } from './feature37-component24.component';

describe('Feature37Component24Component', () => {
  let component: Feature37Component24Component;
  let fixture: ComponentFixture<Feature37Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature37Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
