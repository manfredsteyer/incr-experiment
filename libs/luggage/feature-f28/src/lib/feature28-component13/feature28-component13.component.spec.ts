import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature28Component13Component } from './feature28-component13.component';

describe('Feature28Component13Component', () => {
  let component: Feature28Component13Component;
  let fixture: ComponentFixture<Feature28Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature28Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature28Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
