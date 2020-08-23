import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature46Component5Component } from './feature46-component5.component';

describe('Feature46Component5Component', () => {
  let component: Feature46Component5Component;
  let fixture: ComponentFixture<Feature46Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature46Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature46Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
