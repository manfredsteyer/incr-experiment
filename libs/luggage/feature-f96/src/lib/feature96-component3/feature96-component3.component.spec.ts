import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature96Component3Component } from './feature96-component3.component';

describe('Feature96Component3Component', () => {
  let component: Feature96Component3Component;
  let fixture: ComponentFixture<Feature96Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature96Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature96Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
