import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component13Component } from './feature37-component13.component';

describe('Feature37Component13Component', () => {
  let component: Feature37Component13Component;
  let fixture: ComponentFixture<Feature37Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
