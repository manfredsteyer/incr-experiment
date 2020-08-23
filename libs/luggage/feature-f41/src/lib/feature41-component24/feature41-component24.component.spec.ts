import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component24Component } from './feature41-component24.component';

describe('Feature41Component24Component', () => {
  let component: Feature41Component24Component;
  let fixture: ComponentFixture<Feature41Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
