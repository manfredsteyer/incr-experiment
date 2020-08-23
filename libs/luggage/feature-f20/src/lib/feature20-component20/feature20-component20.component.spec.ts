import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component20Component } from './feature20-component20.component';

describe('Feature20Component20Component', () => {
  let component: Feature20Component20Component;
  let fixture: ComponentFixture<Feature20Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
