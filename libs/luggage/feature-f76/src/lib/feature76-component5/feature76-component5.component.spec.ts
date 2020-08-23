import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature76Component5Component } from './feature76-component5.component';

describe('Feature76Component5Component', () => {
  let component: Feature76Component5Component;
  let fixture: ComponentFixture<Feature76Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature76Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature76Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
