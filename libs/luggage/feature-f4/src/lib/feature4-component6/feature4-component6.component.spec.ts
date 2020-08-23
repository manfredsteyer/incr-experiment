import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component6Component } from './feature4-component6.component';

describe('Feature4Component6Component', () => {
  let component: Feature4Component6Component;
  let fixture: ComponentFixture<Feature4Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
