import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component29Component } from './feature18-component29.component';

describe('Feature18Component29Component', () => {
  let component: Feature18Component29Component;
  let fixture: ComponentFixture<Feature18Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
