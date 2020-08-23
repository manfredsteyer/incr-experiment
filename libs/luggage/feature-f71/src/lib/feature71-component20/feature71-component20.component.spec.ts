import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component20Component } from './feature71-component20.component';

describe('Feature71Component20Component', () => {
  let component: Feature71Component20Component;
  let fixture: ComponentFixture<Feature71Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
