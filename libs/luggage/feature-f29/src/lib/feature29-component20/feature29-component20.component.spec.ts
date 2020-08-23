import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature29Component20Component } from './feature29-component20.component';

describe('Feature29Component20Component', () => {
  let component: Feature29Component20Component;
  let fixture: ComponentFixture<Feature29Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature29Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature29Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
