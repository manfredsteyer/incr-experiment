import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature50Component6Component } from './feature50-component6.component';

describe('Feature50Component6Component', () => {
  let component: Feature50Component6Component;
  let fixture: ComponentFixture<Feature50Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature50Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature50Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
