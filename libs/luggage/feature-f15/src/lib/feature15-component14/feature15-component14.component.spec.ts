import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature15Component14Component } from './feature15-component14.component';

describe('Feature15Component14Component', () => {
  let component: Feature15Component14Component;
  let fixture: ComponentFixture<Feature15Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature15Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature15Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
