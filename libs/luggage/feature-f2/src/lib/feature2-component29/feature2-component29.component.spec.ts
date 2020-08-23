import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component29Component } from './feature2-component29.component';

describe('Feature2Component29Component', () => {
  let component: Feature2Component29Component;
  let fixture: ComponentFixture<Feature2Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
