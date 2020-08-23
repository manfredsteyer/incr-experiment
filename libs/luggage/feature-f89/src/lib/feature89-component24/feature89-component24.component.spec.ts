import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component24Component } from './feature89-component24.component';

describe('Feature89Component24Component', () => {
  let component: Feature89Component24Component;
  let fixture: ComponentFixture<Feature89Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
