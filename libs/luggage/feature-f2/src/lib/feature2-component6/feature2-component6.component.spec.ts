import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component6Component } from './feature2-component6.component';

describe('Feature2Component6Component', () => {
  let component: Feature2Component6Component;
  let fixture: ComponentFixture<Feature2Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
