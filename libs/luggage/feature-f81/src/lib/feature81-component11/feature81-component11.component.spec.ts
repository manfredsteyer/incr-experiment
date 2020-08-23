import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component11Component } from './feature81-component11.component';

describe('Feature81Component11Component', () => {
  let component: Feature81Component11Component;
  let fixture: ComponentFixture<Feature81Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
