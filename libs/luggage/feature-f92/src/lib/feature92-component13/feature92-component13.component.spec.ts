import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature92Component13Component } from './feature92-component13.component';

describe('Feature92Component13Component', () => {
  let component: Feature92Component13Component;
  let fixture: ComponentFixture<Feature92Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature92Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature92Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
