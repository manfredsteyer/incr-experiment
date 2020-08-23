import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component11Component } from './feature48-component11.component';

describe('Feature48Component11Component', () => {
  let component: Feature48Component11Component;
  let fixture: ComponentFixture<Feature48Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
