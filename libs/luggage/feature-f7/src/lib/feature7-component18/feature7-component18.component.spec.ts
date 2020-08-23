import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature7Component18Component } from './feature7-component18.component';

describe('Feature7Component18Component', () => {
  let component: Feature7Component18Component;
  let fixture: ComponentFixture<Feature7Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature7Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature7Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
