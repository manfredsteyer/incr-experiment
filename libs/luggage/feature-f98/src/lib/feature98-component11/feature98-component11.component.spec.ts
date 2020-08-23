import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component11Component } from './feature98-component11.component';

describe('Feature98Component11Component', () => {
  let component: Feature98Component11Component;
  let fixture: ComponentFixture<Feature98Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
