import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component23Component } from './feature8-component23.component';

describe('Feature8Component23Component', () => {
  let component: Feature8Component23Component;
  let fixture: ComponentFixture<Feature8Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
