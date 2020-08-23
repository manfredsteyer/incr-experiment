import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component23Component } from './feature72-component23.component';

describe('Feature72Component23Component', () => {
  let component: Feature72Component23Component;
  let fixture: ComponentFixture<Feature72Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
