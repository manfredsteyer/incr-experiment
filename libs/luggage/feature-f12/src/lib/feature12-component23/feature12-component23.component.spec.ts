import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature12Component23Component } from './feature12-component23.component';

describe('Feature12Component23Component', () => {
  let component: Feature12Component23Component;
  let fixture: ComponentFixture<Feature12Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature12Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature12Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
