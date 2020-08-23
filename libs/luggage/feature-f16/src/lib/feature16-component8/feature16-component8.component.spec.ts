import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component8Component } from './feature16-component8.component';

describe('Feature16Component8Component', () => {
  let component: Feature16Component8Component;
  let fixture: ComponentFixture<Feature16Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
