import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component0Component } from './feature66-component0.component';

describe('Feature66Component0Component', () => {
  let component: Feature66Component0Component;
  let fixture: ComponentFixture<Feature66Component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
