import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component29Component } from './feature13-component29.component';

describe('Feature13Component29Component', () => {
  let component: Feature13Component29Component;
  let fixture: ComponentFixture<Feature13Component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
