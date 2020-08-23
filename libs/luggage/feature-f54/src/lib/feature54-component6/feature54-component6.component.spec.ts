import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature54Component6Component } from './feature54-component6.component';

describe('Feature54Component6Component', () => {
  let component: Feature54Component6Component;
  let fixture: ComponentFixture<Feature54Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature54Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature54Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
