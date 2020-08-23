import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component20Component } from './feature7-component20.component';

describe('Feature7Component20Component', () => {
  let component: Feature7Component20Component;
  let fixture: ComponentFixture<Feature7Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
