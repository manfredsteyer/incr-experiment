import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component6Component } from './feature10-component6.component';

describe('Feature10Component6Component', () => {
  let component: Feature10Component6Component;
  let fixture: ComponentFixture<Feature10Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
