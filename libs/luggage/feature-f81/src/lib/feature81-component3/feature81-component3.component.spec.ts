import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component3Component } from './feature81-component3.component';

describe('Feature81Component3Component', () => {
  let component: Feature81Component3Component;
  let fixture: ComponentFixture<Feature81Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
