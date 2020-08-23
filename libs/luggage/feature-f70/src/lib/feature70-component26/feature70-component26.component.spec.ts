import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature70Component26Component } from './feature70-component26.component';

describe('Feature70Component26Component', () => {
  let component: Feature70Component26Component;
  let fixture: ComponentFixture<Feature70Component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature70Component26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature70Component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
