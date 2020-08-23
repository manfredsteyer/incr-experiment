import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component18Component } from './feature81-component18.component';

describe('Feature81Component18Component', () => {
  let component: Feature81Component18Component;
  let fixture: ComponentFixture<Feature81Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
