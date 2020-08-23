import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component20Component } from './feature49-component20.component';

describe('Feature49Component20Component', () => {
  let component: Feature49Component20Component;
  let fixture: ComponentFixture<Feature49Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
