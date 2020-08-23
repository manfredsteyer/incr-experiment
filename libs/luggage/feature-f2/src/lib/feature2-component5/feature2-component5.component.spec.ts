import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component5Component } from './feature2-component5.component';

describe('Feature2Component5Component', () => {
  let component: Feature2Component5Component;
  let fixture: ComponentFixture<Feature2Component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
