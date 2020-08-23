import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component29Component } from './feature70-component29.component';

describe('Feature70Component29Component', () => {
  let component: Feature70Component29Component;
  let fixture: ComponentFixture<Feature70Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
