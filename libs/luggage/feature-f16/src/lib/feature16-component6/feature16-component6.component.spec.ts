import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component6Component } from './feature16-component6.component';

describe('Feature16Component6Component', () => {
  let component: Feature16Component6Component;
  let fixture: ComponentFixture<Feature16Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature16Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
