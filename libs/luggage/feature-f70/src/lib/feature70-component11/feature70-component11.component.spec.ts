import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component11Component } from './feature70-component11.component';

describe('Feature70Component11Component', () => {
  let component: Feature70Component11Component;
  let fixture: ComponentFixture<Feature70Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
