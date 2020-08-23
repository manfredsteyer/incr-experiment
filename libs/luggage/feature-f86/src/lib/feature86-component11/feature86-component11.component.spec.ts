import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component11Component } from './feature86-component11.component';

describe('Feature86Component11Component', () => {
  let component: Feature86Component11Component;
  let fixture: ComponentFixture<Feature86Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
