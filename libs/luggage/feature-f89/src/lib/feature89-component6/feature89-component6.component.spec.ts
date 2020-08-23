import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature89Component6Component } from './feature89-component6.component';

describe('Feature89Component6Component', () => {
  let component: Feature89Component6Component;
  let fixture: ComponentFixture<Feature89Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature89Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature89Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
