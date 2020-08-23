import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature18Component5Component } from './feature18-component5.component';

describe('Feature18Component5Component', () => {
  let component: Feature18Component5Component;
  let fixture: ComponentFixture<Feature18Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature18Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature18Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
