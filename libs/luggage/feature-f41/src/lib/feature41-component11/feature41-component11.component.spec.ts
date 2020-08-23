import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature41Component11Component } from './feature41-component11.component';

describe('Feature41Component11Component', () => {
  let component: Feature41Component11Component;
  let fixture: ComponentFixture<Feature41Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature41Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature41Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
