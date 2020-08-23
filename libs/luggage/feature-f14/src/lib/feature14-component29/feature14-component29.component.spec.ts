import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature14Component29Component } from './feature14-component29.component';

describe('Feature14Component29Component', () => {
  let component: Feature14Component29Component;
  let fixture: ComponentFixture<Feature14Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature14Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature14Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
