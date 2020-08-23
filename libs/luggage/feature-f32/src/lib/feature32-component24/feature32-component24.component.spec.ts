import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component24Component } from './feature32-component24.component';

describe('Feature32Component24Component', () => {
  let component: Feature32Component24Component;
  let fixture: ComponentFixture<Feature32Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
