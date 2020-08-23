import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component24Component } from './feature31-component24.component';

describe('Feature31Component24Component', () => {
  let component: Feature31Component24Component;
  let fixture: ComponentFixture<Feature31Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
