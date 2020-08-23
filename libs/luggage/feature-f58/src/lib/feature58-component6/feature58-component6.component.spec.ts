import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature58Component6Component } from './feature58-component6.component';

describe('Feature58Component6Component', () => {
  let component: Feature58Component6Component;
  let fixture: ComponentFixture<Feature58Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature58Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature58Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
