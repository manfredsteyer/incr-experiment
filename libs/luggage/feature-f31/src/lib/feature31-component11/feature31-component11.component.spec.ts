import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature31Component11Component } from './feature31-component11.component';

describe('Feature31Component11Component', () => {
  let component: Feature31Component11Component;
  let fixture: ComponentFixture<Feature31Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature31Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature31Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
