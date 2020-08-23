import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature53Component10Component } from './feature53-component10.component';

describe('Feature53Component10Component', () => {
  let component: Feature53Component10Component;
  let fixture: ComponentFixture<Feature53Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature53Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature53Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
