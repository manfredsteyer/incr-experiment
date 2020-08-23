import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component15Component } from './feature56-component15.component';

describe('Feature56Component15Component', () => {
  let component: Feature56Component15Component;
  let fixture: ComponentFixture<Feature56Component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
