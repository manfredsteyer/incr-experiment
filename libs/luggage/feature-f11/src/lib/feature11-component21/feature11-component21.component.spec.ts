import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature11Component21Component } from './feature11-component21.component';

describe('Feature11Component21Component', () => {
  let component: Feature11Component21Component;
  let fixture: ComponentFixture<Feature11Component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature11Component21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature11Component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
