import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component20Component } from './feature79-component20.component';

describe('Feature79Component20Component', () => {
  let component: Feature79Component20Component;
  let fixture: ComponentFixture<Feature79Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
