import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature10Component3Component } from './feature10-component3.component';

describe('Feature10Component3Component', () => {
  let component: Feature10Component3Component;
  let fixture: ComponentFixture<Feature10Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature10Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature10Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
