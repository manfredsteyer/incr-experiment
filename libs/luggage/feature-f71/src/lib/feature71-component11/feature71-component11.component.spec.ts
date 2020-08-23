import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component11Component } from './feature71-component11.component';

describe('Feature71Component11Component', () => {
  let component: Feature71Component11Component;
  let fixture: ComponentFixture<Feature71Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
