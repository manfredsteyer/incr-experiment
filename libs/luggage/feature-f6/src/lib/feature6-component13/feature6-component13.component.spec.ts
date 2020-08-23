import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component13Component } from './feature6-component13.component';

describe('Feature6Component13Component', () => {
  let component: Feature6Component13Component;
  let fixture: ComponentFixture<Feature6Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
