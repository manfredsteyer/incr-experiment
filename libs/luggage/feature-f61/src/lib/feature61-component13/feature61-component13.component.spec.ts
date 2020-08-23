import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature61Component13Component } from './feature61-component13.component';

describe('Feature61Component13Component', () => {
  let component: Feature61Component13Component;
  let fixture: ComponentFixture<Feature61Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature61Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature61Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
