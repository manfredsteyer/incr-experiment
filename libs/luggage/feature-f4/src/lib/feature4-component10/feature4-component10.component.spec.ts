import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature4Component10Component } from './feature4-component10.component';

describe('Feature4Component10Component', () => {
  let component: Feature4Component10Component;
  let fixture: ComponentFixture<Feature4Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature4Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature4Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
