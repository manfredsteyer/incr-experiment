import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component23Component } from './feature2-component23.component';

describe('Feature2Component23Component', () => {
  let component: Feature2Component23Component;
  let fixture: ComponentFixture<Feature2Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
