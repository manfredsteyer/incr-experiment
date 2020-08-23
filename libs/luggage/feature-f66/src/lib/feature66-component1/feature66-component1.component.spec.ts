import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature66Component1Component } from './feature66-component1.component';

describe('Feature66Component1Component', () => {
  let component: Feature66Component1Component;
  let fixture: ComponentFixture<Feature66Component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature66Component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature66Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
