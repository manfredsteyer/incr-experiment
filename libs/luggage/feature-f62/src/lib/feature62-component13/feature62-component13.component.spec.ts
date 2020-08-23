import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature62Component13Component } from './feature62-component13.component';

describe('Feature62Component13Component', () => {
  let component: Feature62Component13Component;
  let fixture: ComponentFixture<Feature62Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature62Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature62Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
