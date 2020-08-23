import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component11Component } from './feature69-component11.component';

describe('Feature69Component11Component', () => {
  let component: Feature69Component11Component;
  let fixture: ComponentFixture<Feature69Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
