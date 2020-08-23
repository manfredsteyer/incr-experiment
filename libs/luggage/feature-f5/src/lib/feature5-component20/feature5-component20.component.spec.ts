import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature5Component20Component } from './feature5-component20.component';

describe('Feature5Component20Component', () => {
  let component: Feature5Component20Component;
  let fixture: ComponentFixture<Feature5Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature5Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature5Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
