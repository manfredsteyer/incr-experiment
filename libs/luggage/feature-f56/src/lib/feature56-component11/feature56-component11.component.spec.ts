import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component11Component } from './feature56-component11.component';

describe('Feature56Component11Component', () => {
  let component: Feature56Component11Component;
  let fixture: ComponentFixture<Feature56Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
