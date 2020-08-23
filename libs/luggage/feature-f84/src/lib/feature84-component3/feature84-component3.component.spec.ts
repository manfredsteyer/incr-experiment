import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component3Component } from './feature84-component3.component';

describe('Feature84Component3Component', () => {
  let component: Feature84Component3Component;
  let fixture: ComponentFixture<Feature84Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
