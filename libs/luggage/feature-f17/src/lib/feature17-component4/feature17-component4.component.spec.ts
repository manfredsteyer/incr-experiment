import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature17Component4Component } from './feature17-component4.component';

describe('Feature17Component4Component', () => {
  let component: Feature17Component4Component;
  let fixture: ComponentFixture<Feature17Component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature17Component4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature17Component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
