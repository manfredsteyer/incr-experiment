import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature85Component5Component } from './feature85-component5.component';

describe('Feature85Component5Component', () => {
  let component: Feature85Component5Component;
  let fixture: ComponentFixture<Feature85Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature85Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature85Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
