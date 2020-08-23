import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component24Component } from './feature56-component24.component';

describe('Feature56Component24Component', () => {
  let component: Feature56Component24Component;
  let fixture: ComponentFixture<Feature56Component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
