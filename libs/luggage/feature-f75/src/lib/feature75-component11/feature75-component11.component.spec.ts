import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature75Component11Component } from './feature75-component11.component';

describe('Feature75Component11Component', () => {
  let component: Feature75Component11Component;
  let fixture: ComponentFixture<Feature75Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature75Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature75Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
