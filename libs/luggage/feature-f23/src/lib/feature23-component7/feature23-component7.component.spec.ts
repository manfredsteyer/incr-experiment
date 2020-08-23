import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component7Component } from './feature23-component7.component';

describe('Feature23Component7Component', () => {
  let component: Feature23Component7Component;
  let fixture: ComponentFixture<Feature23Component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
