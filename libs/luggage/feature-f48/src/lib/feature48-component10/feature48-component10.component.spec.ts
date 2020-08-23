import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component10Component } from './feature48-component10.component';

describe('Feature48Component10Component', () => {
  let component: Feature48Component10Component;
  let fixture: ComponentFixture<Feature48Component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
