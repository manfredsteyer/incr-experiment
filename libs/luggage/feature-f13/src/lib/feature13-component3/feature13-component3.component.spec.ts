import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component3Component } from './feature13-component3.component';

describe('Feature13Component3Component', () => {
  let component: Feature13Component3Component;
  let fixture: ComponentFixture<Feature13Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
