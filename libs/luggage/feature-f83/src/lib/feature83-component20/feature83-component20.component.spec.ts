import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component20Component } from './feature83-component20.component';

describe('Feature83Component20Component', () => {
  let component: Feature83Component20Component;
  let fixture: ComponentFixture<Feature83Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
