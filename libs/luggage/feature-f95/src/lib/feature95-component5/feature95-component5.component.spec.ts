import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature95Component5Component } from './feature95-component5.component';

describe('Feature95Component5Component', () => {
  let component: Feature95Component5Component;
  let fixture: ComponentFixture<Feature95Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature95Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature95Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
