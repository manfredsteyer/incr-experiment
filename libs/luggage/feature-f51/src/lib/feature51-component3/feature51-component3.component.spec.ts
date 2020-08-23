import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature51Component3Component } from './feature51-component3.component';

describe('Feature51Component3Component', () => {
  let component: Feature51Component3Component;
  let fixture: ComponentFixture<Feature51Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature51Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature51Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
