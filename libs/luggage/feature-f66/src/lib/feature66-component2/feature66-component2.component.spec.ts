import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component2Component } from './feature66-component2.component';

describe('Feature66Component2Component', () => {
  let component: Feature66Component2Component;
  let fixture: ComponentFixture<Feature66Component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
