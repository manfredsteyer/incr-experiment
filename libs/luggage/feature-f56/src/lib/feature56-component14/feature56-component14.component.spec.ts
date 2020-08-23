import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component14Component } from './feature56-component14.component';

describe('Feature56Component14Component', () => {
  let component: Feature56Component14Component;
  let fixture: ComponentFixture<Feature56Component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
