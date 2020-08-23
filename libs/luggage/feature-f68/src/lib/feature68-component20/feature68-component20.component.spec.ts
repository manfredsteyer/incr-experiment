import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature68Component20Component } from './feature68-component20.component';

describe('Feature68Component20Component', () => {
  let component: Feature68Component20Component;
  let fixture: ComponentFixture<Feature68Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature68Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature68Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
