import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component3Component } from './feature2-component3.component';

describe('Feature2Component3Component', () => {
  let component: Feature2Component3Component;
  let fixture: ComponentFixture<Feature2Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});