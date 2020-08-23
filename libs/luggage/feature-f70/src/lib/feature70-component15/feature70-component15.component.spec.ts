import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component15Component } from './feature70-component15.component';

describe('Feature70Component15Component', () => {
  let component: Feature70Component15Component;
  let fixture: ComponentFixture<Feature70Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
