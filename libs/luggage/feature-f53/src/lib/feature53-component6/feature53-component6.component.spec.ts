import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component6Component } from './feature53-component6.component';

describe('Feature53Component6Component', () => {
  let component: Feature53Component6Component;
  let fixture: ComponentFixture<Feature53Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature53Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
