import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature71Component6Component } from './feature71-component6.component';

describe('Feature71Component6Component', () => {
  let component: Feature71Component6Component;
  let fixture: ComponentFixture<Feature71Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature71Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature71Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
