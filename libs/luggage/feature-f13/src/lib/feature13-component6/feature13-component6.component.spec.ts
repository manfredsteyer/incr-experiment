import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component6Component } from './feature13-component6.component';

describe('Feature13Component6Component', () => {
  let component: Feature13Component6Component;
  let fixture: ComponentFixture<Feature13Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
