import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component20Component } from './feature37-component20.component';

describe('Feature37Component20Component', () => {
  let component: Feature37Component20Component;
  let fixture: ComponentFixture<Feature37Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
