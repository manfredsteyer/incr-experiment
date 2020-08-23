import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component7Component } from './feature60-component7.component';

describe('Feature60Component7Component', () => {
  let component: Feature60Component7Component;
  let fixture: ComponentFixture<Feature60Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
