import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component13Component } from './feature79-component13.component';

describe('Feature79Component13Component', () => {
  let component: Feature79Component13Component;
  let fixture: ComponentFixture<Feature79Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
