import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component6Component } from './feature32-component6.component';

describe('Feature32Component6Component', () => {
  let component: Feature32Component6Component;
  let fixture: ComponentFixture<Feature32Component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Feature32Component6Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
