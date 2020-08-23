import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component24Component } from './feature58-component24.component';

describe('Feature58Component24Component', () => {
  let component: Feature58Component24Component;
  let fixture: ComponentFixture<Feature58Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
