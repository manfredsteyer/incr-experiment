import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component23Component } from './feature70-component23.component';

describe('Feature70Component23Component', () => {
  let component: Feature70Component23Component;
  let fixture: ComponentFixture<Feature70Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
