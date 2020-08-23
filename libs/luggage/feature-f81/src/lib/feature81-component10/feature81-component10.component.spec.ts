import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature81Component10Component } from './feature81-component10.component';

describe('Feature81Component10Component', () => {
  let component: Feature81Component10Component;
  let fixture: ComponentFixture<Feature81Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature81Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature81Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
