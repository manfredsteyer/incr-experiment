import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature23Component6Component } from './feature23-component6.component';

describe('Feature23Component6Component', () => {
  let component: Feature23Component6Component;
  let fixture: ComponentFixture<Feature23Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature23Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature23Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
