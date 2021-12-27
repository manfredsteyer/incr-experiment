import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component24Component } from './feature61-component24.component';

describe('Feature61Component24Component', () => {
  let component: Feature61Component24Component;
  let fixture: ComponentFixture<Feature61Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature61Component24Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
