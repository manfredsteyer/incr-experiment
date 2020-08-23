import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature37Component11Component } from './feature37-component11.component';

describe('Feature37Component11Component', () => {
  let component: Feature37Component11Component;
  let fixture: ComponentFixture<Feature37Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature37Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature37Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
