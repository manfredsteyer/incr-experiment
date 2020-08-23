import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component6Component } from './feature91-component6.component';

describe('Feature91Component6Component', () => {
  let component: Feature91Component6Component;
  let fixture: ComponentFixture<Feature91Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
