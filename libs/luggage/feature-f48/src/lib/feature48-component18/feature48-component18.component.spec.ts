import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature48Component18Component } from './feature48-component18.component';

describe('Feature48Component18Component', () => {
  let component: Feature48Component18Component;
  let fixture: ComponentFixture<Feature48Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature48Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature48Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
