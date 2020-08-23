import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature36Component29Component } from './feature36-component29.component';

describe('Feature36Component29Component', () => {
  let component: Feature36Component29Component;
  let fixture: ComponentFixture<Feature36Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature36Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature36Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
