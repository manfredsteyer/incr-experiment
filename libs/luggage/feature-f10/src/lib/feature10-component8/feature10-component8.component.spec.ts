import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component8Component } from './feature10-component8.component';

describe('Feature10Component8Component', () => {
  let component: Feature10Component8Component;
  let fixture: ComponentFixture<Feature10Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
