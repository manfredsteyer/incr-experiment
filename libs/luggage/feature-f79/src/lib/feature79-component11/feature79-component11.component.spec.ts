import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature79Component11Component } from './feature79-component11.component';

describe('Feature79Component11Component', () => {
  let component: Feature79Component11Component;
  let fixture: ComponentFixture<Feature79Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature79Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature79Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
