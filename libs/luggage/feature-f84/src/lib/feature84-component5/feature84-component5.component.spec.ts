import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature84Component5Component } from './feature84-component5.component';

describe('Feature84Component5Component', () => {
  let component: Feature84Component5Component;
  let fixture: ComponentFixture<Feature84Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature84Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature84Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
