import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component23Component } from './feature51-component23.component';

describe('Feature51Component23Component', () => {
  let component: Feature51Component23Component;
  let fixture: ComponentFixture<Feature51Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
