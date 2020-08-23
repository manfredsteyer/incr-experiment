import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component20Component } from './feature69-component20.component';

describe('Feature69Component20Component', () => {
  let component: Feature69Component20Component;
  let fixture: ComponentFixture<Feature69Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
