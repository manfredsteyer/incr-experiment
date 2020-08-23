import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature86Component18Component } from './feature86-component18.component';

describe('Feature86Component18Component', () => {
  let component: Feature86Component18Component;
  let fixture: ComponentFixture<Feature86Component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature86Component18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature86Component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
