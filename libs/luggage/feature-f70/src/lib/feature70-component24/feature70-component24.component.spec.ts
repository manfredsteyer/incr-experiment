import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component24Component } from './feature70-component24.component';

describe('Feature70Component24Component', () => {
  let component: Feature70Component24Component;
  let fixture: ComponentFixture<Feature70Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
