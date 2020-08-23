import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component13Component } from './feature5-component13.component';

describe('Feature5Component13Component', () => {
  let component: Feature5Component13Component;
  let fixture: ComponentFixture<Feature5Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
