import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature60Component23Component } from './feature60-component23.component';

describe('Feature60Component23Component', () => {
  let component: Feature60Component23Component;
  let fixture: ComponentFixture<Feature60Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature60Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature60Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
