import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component6Component } from './feature20-component6.component';

describe('Feature20Component6Component', () => {
  let component: Feature20Component6Component;
  let fixture: ComponentFixture<Feature20Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
