import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component28Component } from './feature2-component28.component';

describe('Feature2Component28Component', () => {
  let component: Feature2Component28Component;
  let fixture: ComponentFixture<Feature2Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature2Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
