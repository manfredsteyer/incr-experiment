import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature13Component28Component } from './feature13-component28.component';

describe('Feature13Component28Component', () => {
  let component: Feature13Component28Component;
  let fixture: ComponentFixture<Feature13Component28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature13Component28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature13Component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
