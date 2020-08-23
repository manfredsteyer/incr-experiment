import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature32Component3Component } from './feature32-component3.component';

describe('Feature32Component3Component', () => {
  let component: Feature32Component3Component;
  let fixture: ComponentFixture<Feature32Component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feature32Component3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature32Component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
