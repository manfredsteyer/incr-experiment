import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature16Component10Component } from './feature16-component10.component';

describe('Feature16Component10Component', () => {
  let component: Feature16Component10Component;
  let fixture: ComponentFixture<Feature16Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature16Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature16Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
