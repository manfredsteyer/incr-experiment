import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component11Component } from './feature53-component11.component';

describe('Feature53Component11Component', () => {
  let component: Feature53Component11Component;
  let fixture: ComponentFixture<Feature53Component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
