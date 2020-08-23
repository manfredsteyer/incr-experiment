import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature24Component23Component } from './feature24-component23.component';

describe('Feature24Component23Component', () => {
  let component: Feature24Component23Component;
  let fixture: ComponentFixture<Feature24Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature24Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature24Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
