import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component24Component } from './feature48-component24.component';

describe('Feature48Component24Component', () => {
  let component: Feature48Component24Component;
  let fixture: ComponentFixture<Feature48Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
