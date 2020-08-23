import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature30Component20Component } from './feature30-component20.component';

describe('Feature30Component20Component', () => {
  let component: Feature30Component20Component;
  let fixture: ComponentFixture<Feature30Component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature30Component20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature30Component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
