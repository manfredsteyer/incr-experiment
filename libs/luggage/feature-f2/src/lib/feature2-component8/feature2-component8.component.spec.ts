import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component8Component } from './feature2-component8.component';

describe('Feature2Component8Component', () => {
  let component: Feature2Component8Component;
  let fixture: ComponentFixture<Feature2Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
