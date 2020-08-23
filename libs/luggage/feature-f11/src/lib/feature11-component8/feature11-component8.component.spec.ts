import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component8Component } from './feature11-component8.component';

describe('Feature11Component8Component', () => {
  let component: Feature11Component8Component;
  let fixture: ComponentFixture<Feature11Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
