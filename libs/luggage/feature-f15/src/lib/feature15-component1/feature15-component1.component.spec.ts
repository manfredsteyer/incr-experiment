import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component1Component } from './feature15-component1.component';

describe('Feature15Component1Component', () => {
  let component: Feature15Component1Component;
  let fixture: ComponentFixture<Feature15Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
