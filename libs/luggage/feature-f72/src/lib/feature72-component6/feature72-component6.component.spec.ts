import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature72Component6Component } from './feature72-component6.component';

describe('Feature72Component6Component', () => {
  let component: Feature72Component6Component;
  let fixture: ComponentFixture<Feature72Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature72Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature72Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
