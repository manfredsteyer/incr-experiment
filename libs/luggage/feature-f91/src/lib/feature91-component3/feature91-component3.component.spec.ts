import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature91Component3Component } from './feature91-component3.component';

describe('Feature91Component3Component', () => {
  let component: Feature91Component3Component;
  let fixture: ComponentFixture<Feature91Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature91Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature91Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
