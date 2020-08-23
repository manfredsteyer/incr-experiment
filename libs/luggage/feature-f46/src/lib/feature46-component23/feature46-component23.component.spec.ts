import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component23Component } from './feature46-component23.component';

describe('Feature46Component23Component', () => {
  let component: Feature46Component23Component;
  let fixture: ComponentFixture<Feature46Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
