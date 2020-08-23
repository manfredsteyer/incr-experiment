import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature49Component11Component } from './feature49-component11.component';

describe('Feature49Component11Component', () => {
  let component: Feature49Component11Component;
  let fixture: ComponentFixture<Feature49Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature49Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature49Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
