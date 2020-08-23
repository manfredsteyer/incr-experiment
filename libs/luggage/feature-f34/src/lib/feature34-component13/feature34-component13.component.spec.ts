import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature34Component13Component } from './feature34-component13.component';

describe('Feature34Component13Component', () => {
  let component: Feature34Component13Component;
  let fixture: ComponentFixture<Feature34Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature34Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature34Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
