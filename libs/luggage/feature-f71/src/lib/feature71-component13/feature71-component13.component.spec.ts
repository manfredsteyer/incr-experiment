import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component13Component } from './feature71-component13.component';

describe('Feature71Component13Component', () => {
  let component: Feature71Component13Component;
  let fixture: ComponentFixture<Feature71Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
