import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component6Component } from './feature81-component6.component';

describe('Feature81Component6Component', () => {
  let component: Feature81Component6Component;
  let fixture: ComponentFixture<Feature81Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
