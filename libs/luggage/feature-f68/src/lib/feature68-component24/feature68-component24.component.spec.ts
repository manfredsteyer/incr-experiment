import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component24Component } from './feature68-component24.component';

describe('Feature68Component24Component', () => {
  let component: Feature68Component24Component;
  let fixture: ComponentFixture<Feature68Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature68Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
