import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component7Component } from './feature70-component7.component';

describe('Feature70Component7Component', () => {
  let component: Feature70Component7Component;
  let fixture: ComponentFixture<Feature70Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
