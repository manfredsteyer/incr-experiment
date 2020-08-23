import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component6Component } from './feature7-component6.component';

describe('Feature7Component6Component', () => {
  let component: Feature7Component6Component;
  let fixture: ComponentFixture<Feature7Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
