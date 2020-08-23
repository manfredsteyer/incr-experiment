import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component29Component } from './feature51-component29.component';

describe('Feature51Component29Component', () => {
  let component: Feature51Component29Component;
  let fixture: ComponentFixture<Feature51Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
