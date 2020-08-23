import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component13Component } from './feature54-component13.component';

describe('Feature54Component13Component', () => {
  let component: Feature54Component13Component;
  let fixture: ComponentFixture<Feature54Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
