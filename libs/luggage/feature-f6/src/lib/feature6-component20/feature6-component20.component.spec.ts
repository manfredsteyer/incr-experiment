import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature6Component20Component } from './feature6-component20.component';

describe('Feature6Component20Component', () => {
  let component: Feature6Component20Component;
  let fixture: ComponentFixture<Feature6Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature6Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature6Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
