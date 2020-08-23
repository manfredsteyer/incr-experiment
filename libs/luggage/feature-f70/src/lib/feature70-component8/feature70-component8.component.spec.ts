import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component8Component } from './feature70-component8.component';

describe('Feature70Component8Component', () => {
  let component: Feature70Component8Component;
  let fixture: ComponentFixture<Feature70Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
