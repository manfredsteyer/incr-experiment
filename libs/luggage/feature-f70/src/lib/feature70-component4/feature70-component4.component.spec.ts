import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component4Component } from './feature70-component4.component';

describe('Feature70Component4Component', () => {
  let component: Feature70Component4Component;
  let fixture: ComponentFixture<Feature70Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
