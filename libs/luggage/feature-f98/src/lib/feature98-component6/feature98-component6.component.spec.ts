import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature98Component6Component } from './feature98-component6.component';

describe('Feature98Component6Component', () => {
  let component: Feature98Component6Component;
  let fixture: ComponentFixture<Feature98Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature98Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature98Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
