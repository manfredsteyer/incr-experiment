import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component14Component } from './feature41-component14.component';

describe('Feature41Component14Component', () => {
  let component: Feature41Component14Component;
  let fixture: ComponentFixture<Feature41Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
