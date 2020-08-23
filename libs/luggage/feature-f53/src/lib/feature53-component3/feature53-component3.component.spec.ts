import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component3Component } from './feature53-component3.component';

describe('Feature53Component3Component', () => {
  let component: Feature53Component3Component;
  let fixture: ComponentFixture<Feature53Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
