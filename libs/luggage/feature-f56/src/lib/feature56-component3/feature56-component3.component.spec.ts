import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature56Component3Component } from './feature56-component3.component';

describe('Feature56Component3Component', () => {
  let component: Feature56Component3Component;
  let fixture: ComponentFixture<Feature56Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature56Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature56Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
