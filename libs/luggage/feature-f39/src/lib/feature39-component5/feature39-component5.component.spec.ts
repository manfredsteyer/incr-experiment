import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature39Component5Component } from './feature39-component5.component';

describe('Feature39Component5Component', () => {
  let component: Feature39Component5Component;
  let fixture: ComponentFixture<Feature39Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature39Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature39Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
