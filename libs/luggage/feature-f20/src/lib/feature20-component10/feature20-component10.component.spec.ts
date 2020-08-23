import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature20Component10Component } from './feature20-component10.component';

describe('Feature20Component10Component', () => {
  let component: Feature20Component10Component;
  let fixture: ComponentFixture<Feature20Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature20Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature20Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
