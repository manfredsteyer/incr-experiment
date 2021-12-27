import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature26Component20Component } from './feature26-component20.component';

describe('Feature26Component20Component', () => {
  let component: Feature26Component20Component;
  let fixture: ComponentFixture<Feature26Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature26Component20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature26Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
