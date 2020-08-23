import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component18Component } from './feature53-component18.component';

describe('Feature53Component18Component', () => {
  let component: Feature53Component18Component;
  let fixture: ComponentFixture<Feature53Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
