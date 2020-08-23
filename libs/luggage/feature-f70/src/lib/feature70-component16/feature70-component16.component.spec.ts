import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component16Component } from './feature70-component16.component';

describe('Feature70Component16Component', () => {
  let component: Feature70Component16Component;
  let fixture: ComponentFixture<Feature70Component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
