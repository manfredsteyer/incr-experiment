import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component7Component } from './feature12-component7.component';

describe('Feature12Component7Component', () => {
  let component: Feature12Component7Component;
  let fixture: ComponentFixture<Feature12Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
