import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component8Component } from './feature53-component8.component';

describe('Feature53Component8Component', () => {
  let component: Feature53Component8Component;
  let fixture: ComponentFixture<Feature53Component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
