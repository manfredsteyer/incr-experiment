import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature55Component8Component } from './feature55-component8.component';

describe('Feature55Component8Component', () => {
  let component: Feature55Component8Component;
  let fixture: ComponentFixture<Feature55Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature55Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature55Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
