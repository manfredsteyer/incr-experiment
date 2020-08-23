import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature83Component11Component } from './feature83-component11.component';

describe('Feature83Component11Component', () => {
  let component: Feature83Component11Component;
  let fixture: ComponentFixture<Feature83Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature83Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature83Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
