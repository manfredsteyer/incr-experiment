import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature8Component1Component } from './feature8-component1.component';

describe('Feature8Component1Component', () => {
  let component: Feature8Component1Component;
  let fixture: ComponentFixture<Feature8Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature8Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature8Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
