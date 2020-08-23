import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature44Component24Component } from './feature44-component24.component';

describe('Feature44Component24Component', () => {
  let component: Feature44Component24Component;
  let fixture: ComponentFixture<Feature44Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature44Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature44Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
