import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component23Component } from './feature16-component23.component';

describe('Feature16Component23Component', () => {
  let component: Feature16Component23Component;
  let fixture: ComponentFixture<Feature16Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
