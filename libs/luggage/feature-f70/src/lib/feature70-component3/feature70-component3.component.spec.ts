import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component3Component } from './feature70-component3.component';

describe('Feature70Component3Component', () => {
  let component: Feature70Component3Component;
  let fixture: ComponentFixture<Feature70Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
