import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature69Component18Component } from './feature69-component18.component';

describe('Feature69Component18Component', () => {
  let component: Feature69Component18Component;
  let fixture: ComponentFixture<Feature69Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature69Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature69Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
