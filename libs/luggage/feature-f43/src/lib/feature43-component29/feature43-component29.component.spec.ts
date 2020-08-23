import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature43Component29Component } from './feature43-component29.component';

describe('Feature43Component29Component', () => {
  let component: Feature43Component29Component;
  let fixture: ComponentFixture<Feature43Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature43Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature43Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
