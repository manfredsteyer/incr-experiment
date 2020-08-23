import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component3Component } from './feature16-component3.component';

describe('Feature16Component3Component', () => {
  let component: Feature16Component3Component;
  let fixture: ComponentFixture<Feature16Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
