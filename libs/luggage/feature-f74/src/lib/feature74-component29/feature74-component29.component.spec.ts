import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature74Component29Component } from './feature74-component29.component';

describe('Feature74Component29Component', () => {
  let component: Feature74Component29Component;
  let fixture: ComponentFixture<Feature74Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature74Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature74Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
